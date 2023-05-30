import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import {
  MinuteCandle,
  MinuteCandleDocument,
} from '@lib/schemas/minuteCandle.schema'
import { TradeRank, TradeRankDocument } from '@lib/schemas/tradeRank.schema'
import { Upbit } from '@lib/utils/upbit'
import { sleep } from '@lib/utils/sleep'
import { ObjType, Tokens } from 'types'
import { resolveDatetime } from '@lib/utils/datetime'
import { cloneDeep } from 'lodash'
import { CreateMinuteCandleDto } from './dtos/create-minute-candle.dto'

@Injectable()
export class MinuteCandleService {
  constructor(
    @InjectModel(MinuteCandle.name)
    private readonly minuteCandleModel: Model<MinuteCandleDocument>,
    @InjectModel(TradeRank.name)
    private readonly tradeRankModel: Model<TradeRankDocument>,
    private readonly upbit: Upbit,
  ) {}

  async create(unit: number, to: string): Promise<void> {
    let i = 1
    const array: CreateMinuteCandleDto[] = []
    const tokens: Tokens[] = await this.upbit.getAllTokens()
    const krwTokens = tokens.filter(
      (value) => 'KRW' === value.market.split('-')[0],
    )

    for await (const token of krwTokens) {
      const start = Date.now()
      try {
        const response = await this.upbit.getMinuteCandle(
          unit,
          token.market,
          to,
        )
        const exist = await this.minuteCandleModel.findOne({
          timestamp: response[0].timestamp,
        })
        if (exist) {
          return
        }
        const obj = {} as CreateMinuteCandleDto
        const res = response[0]
        obj['market'] = res.market
        obj['candle_date_time_utc'] = `${res.candle_date_time_utc}.000Z`
        obj['timestamp'] = res.timestamp
        obj['candle_acc_trade_price'] = res.candle_acc_trade_price
        obj['candle_acc_trade_volume'] = res.candle_acc_trade_volume
        obj['unit'] = res.unit

        array.push(obj)
      } catch {
        continue
      } finally {
        const now = Date.now()
        if (i % 10 === 0 && now - start < 1000) {
          await sleep(1200 - (now - start))
        }
        if (i === 115 && now - start < 1000) {
          await sleep(1200 - (now - start))
        }
        i++
      }
    }

    try {
      await this.minuteCandleModel.insertMany(array)
    } catch (e) {
      throw new Error(e)
    }
  }

  async delete(datetime: string): Promise<void> {
    console.log('Deleteing MinuteCandles')

    const { year, month, date, hour } = resolveDatetime(datetime)
    const baseTime = new Date(year, month, date - 25, hour).toISOString()

    await this.minuteCandleModel.deleteMany({
      candle_date_time_utc: { $lt: baseTime },
    })

    await this.tradeRankModel.deleteMany({
      datetime: { $lt: baseTime },
    })

    console.log('Done')
  }

  async findByMarketAndDatetime(
    market: string,
    hours: HoursType,
    datetime: string,
  ) {
    const result = await this.minuteCandleModel
      .find(
        {
          market,
          candle_date_time_utc: { $lte: datetime },
        },
        { _id: 0, __v: 0 },
      )
      .sort({ candle_date_time_utc: -1 })
      .limit(hours * 2)

    if (result.length < hours * 2) {
      return
    }

    return result
  }

  async calculateSum(hours: HoursType, datetime: string) {
    const array: ObjType[] = []
    const tokens: Tokens[] = await this.upbit.getAllTokens()
    const krwTokens = tokens.filter(
      (value) => 'KRW' === value.market.split('-')[0],
    )

    for await (const value of krwTokens) {
      const data = await this.findByMarketAndDatetime(
        value.market,
        hours,
        datetime,
      )

      if (!data) {
        return
      }

      const obj: ObjType = {
        market: data[0].market,
        datetime: data[0].candle_date_time_utc,
      }

      const volumeSum = data
        .slice(0, data.length / 2)
        .reduce(
          (accumulator, object) => accumulator + object.candle_acc_trade_volume,
          0,
        )
      const prevVolumeSum = data
        .slice(data.length / 2)
        .reduce(
          (accumulator, object) => accumulator + object.candle_acc_trade_volume,
          0,
        )
      const volumeDiff = volumeSum - prevVolumeSum

      const priceSum = data
        .slice(0, data.length / 2)
        .reduce(
          (accumulator, object) => accumulator + object.candle_acc_trade_price,
          0,
        )
      const prevPriceSum = data
        .slice(data.length / 2)
        .reduce(
          (accumulator, object) => accumulator + object.candle_acc_trade_price,
          0,
        )
      const priceDiff = priceSum - prevPriceSum

      obj[`volumeSum${hours}H`] = volumeSum
      obj[`volumeDiff${hours}H`] = volumeDiff
      obj[`volumeDiffRate${hours}H`] = volumeDiff / prevVolumeSum
      obj[`priceSum${hours}H`] = priceSum
      obj[`priceDiff${hours}H`] = priceDiff
      obj[`priceDiffRate${hours}H`] = priceDiff / prevPriceSum
      array.push(obj)
    }

    return array
  }

  async saveRankData(hours: HoursType, datetime: string) {
    console.log('SAVING RANK DATA UNIT::: ', hours, 'DATETIME::: ', datetime)
    const { year, month, date, hour } = resolveDatetime(datetime)
    const newDatetime = new Date(year, month, date, hour).toISOString()
    const prevTime = new Date(year, month, date, hour - hours).toISOString()
    const prevDay = new Date(year, month, date - 1, hour).toISOString()

    const data: ObjType[] | null = await this.calculateSum(hours, newDatetime)
    if (!data) {
      return
    }

    const array = []

    const sortedDataByVolumeSum = cloneDeep(data).sort(
      (a, b) => b[`volumeSum${hours}H`] - a[`volumeSum${hours}H`],
    )
    const sortedDataByVolumeDiffRate = cloneDeep(data).sort(
      (a, b) => b[`volumeDiffRate${hours}H`] - a[`volumeDiffRate${hours}H`],
    )
    const sortedDataByPriceSum = cloneDeep(data).sort(
      (a, b) => b[`priceSum${hours}H`] - a[`priceSum${hours}H`],
    )
    const sortedDataByPriceDiff = cloneDeep(data).sort(
      (a, b) => b[`priceDiff${hours}H`] - a[`priceDiff${hours}H`],
    )
    const sortedDataByPriceDiffRate = cloneDeep(data).sort(
      (a, b) => b[`priceDiffRate${hours}H`] - a[`priceDiffRate${hours}H`],
    )

    for await (const item of data) {
      const exist = await this.tradeRankModel.findOne({
        market: item.market,
        datetime: item.datetime,
        unit: hours,
      })

      if (exist) {
      } else {
        const obj = {}
        const prevData = await this.tradeRankModel.findOne({
          market: item.market,
          datetime: prevTime,
          unit: hours,
        })
        const prevDayData = await this.tradeRankModel.findOne({
          market: item.market,
          datetime: prevDay,
          unit: hours,
        })

        obj['market'] = item.market
        obj['volumeSum'] = item[`volumeSum${hours}H`]
        obj['priceSum'] = item[`priceSum${hours}H`]
        obj['volumeDiff'] = item[`volumeDiff${hours}H`]
        obj['priceDiff'] = item[`priceDiff${hours}H`]
        obj['volumeDiffRate'] = item[`volumeDiffRate${hours}H`]
        obj['priceDiffRate'] = item[`priceDiffRate${hours}H`]
        obj['volumeSumRank'] =
          sortedDataByVolumeSum.findIndex(
            (value) => value.market === item.market,
          ) + 1
        obj['volumeDiffRateRank'] =
          sortedDataByVolumeDiffRate.findIndex(
            (value) => value.market === item.market,
          ) + 1
        obj['priceSumRank'] =
          sortedDataByPriceSum.findIndex(
            (value) => value.market === item.market,
          ) + 1
        obj['priceDiffRank'] =
          sortedDataByPriceDiff.findIndex(
            (value) => value.market === item.market,
          ) + 1
        obj['priceDiffRateRank'] =
          sortedDataByPriceDiffRate.findIndex(
            (value) => value.market === item.market,
          ) + 1
        obj['prevVolumeDiffRateRank'] = prevData
          ? prevData.volumeDiffRateRank
          : null
        obj['prevDayVolumeDiffRateRank'] = prevDayData
          ? prevDayData.volumeDiffRateRank
          : null
        obj['prevPriceDiffRank'] = prevData ? prevData.priceDiffRank : null
        obj['prevDayPriceDiffRank'] = prevDayData
          ? prevDayData.priceDiffRank
          : null
        obj['prevPriceDiffRateRank'] = prevData
          ? prevData.priceDiffRateRank
          : null
        obj['prevDayPriceDiffRateRank'] = prevDayData
          ? prevDayData.priceDiffRateRank
          : null
        obj['unit'] = hours
        obj['datetime'] = item.datetime
        array.push(obj)
      }
    }

    try {
      await this.tradeRankModel.insertMany(array)
    } catch (e) {
      throw new Error(e)
    }
  }
}
