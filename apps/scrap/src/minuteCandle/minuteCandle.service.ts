import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import {
  MinuteCandle,
  MinuteCandleDocument,
} from '@lib/schemas/minuteCandle.schema'
import { Upbit } from '@lib/utils/upbit'
import { sleep } from '@lib/utils/sleep'
import { krwTokens } from '../infra/upbit/tokens'
import { MinutesType, HoursType, ResponseType } from '../types'
import { convertDatetime } from '@lib/utils/datetime'
import { TradeRank, TradeRankDocument } from '@lib/schemas/tradeRank.schema'
import { ObjType } from '../types'
import { cloneDeep } from 'lodash'
@Injectable()
export class MinuteCandleService {
  constructor(
    @InjectModel(MinuteCandle.name)
    private readonly minuteCandleModel: Model<MinuteCandleDocument>,
    @InjectModel(TradeRank.name)
    private readonly tradeRankModel: Model<TradeRankDocument>,
    private readonly upbit: Upbit,
  ) {}

  async create(unit: MinutesType, count: number): Promise<void> {
    console.log(`Saving MinuteCandles`)
    let i = 1
    for await (let token of krwTokens) {
      const start = Date.now()
      await this.upbit
        .getMinuteCandle(unit, token.market, count)
        .then(async (res: ResponseType[]) => {
          console.log(res[0].market, res[0].candle_date_time_kst)
          const reversedResponses = res.reverse()
          for await (let response of reversedResponses) {
            if (
              reversedResponses.indexOf(response) ===
              reversedResponses.length - 1
            ) {
            } else {
              await this.minuteCandleModel
                .findOne({
                  market: response.market,
                  timestamp: response.timestamp,
                })
                .then(async (res) => {
                  if (res) {
                    console.log('있어', res.candle_date_time_utc)
                  } else {
                    const tokenCandle = new this.minuteCandleModel({
                      market: response.market,
                      candle_date_time_utc: new Date(
                        `${response.candle_date_time_utc}.000Z`,
                      ),
                      timestamp: response.timestamp,
                      candle_acc_trade_price: response.candle_acc_trade_price,
                      candle_acc_trade_volume: response.candle_acc_trade_volume,
                      unit: response.unit
                    })
                    await tokenCandle.save()
                  }
                })
            }
          }
        })
        .then(async () => {
          const now = Date.now()
          if (i % 10 === 0 && now - start < 1000) {
            await sleep(1200 - (now - start))
          }
          i++
        })
    }
    console.log('DONE')
  }

  async delete(unit: MinutesType): Promise<void> {
    console.log('Deleteing MinuteCandles')

    for (let i = 1; i < krwTokens.length + 1; i++) {
      const start = Date.now()
      const utcDate: ResponseType[] = await this.upbit.getMinuteCandle(
        unit,
        krwTokens[i - 1].market,
        1,
      )
      const date = new Date(`${utcDate[0].candle_date_time_utc}.000Z`)
      const newDate = new Date(date.setDate(date.getDate() - 14))

      await this.minuteCandleModel.deleteMany({
        market: krwTokens[i - 1].market,
        candle_date_time_utc: { $lt: newDate },
      })
      const now = Date.now()

      if (i % 10 == 0 && now - start < 1000) {
        await sleep(1100 - (now - start))
      }
    }
    console.log('Done')
  }

  async findByMarketAndDatetime(
    market: string,
    hours: HoursType,
    datetime: Date,
  ) {

    return await this.minuteCandleModel
      .find(
        {
          market,
          candle_date_time_utc: { $lte: datetime },
        },
        { _id: 0, __v: 0 },
      )
      .sort({ candle_date_time_utc: -1 })
      .limit(hours * 2)
  }

  async calculate(hours: HoursType, datetime: Date) {
    let array: ObjType[] = []

    for await (let value of krwTokens) {
      const data = await this.findByMarketAndDatetime(value.market, hours, datetime)
      let obj: ObjType = { market: data[0].market, datetime: data[0].candle_date_time_utc }
      
      const volumeSum = data
        .slice(0, data.length / 2)
        .reduce((accumulator, object) =>
          accumulator + object.candle_acc_trade_volume, 0
        )
      const prevVolumeSum = data
        .slice(data.length / 2)
        .reduce((accumulator, object) =>
          accumulator + object.candle_acc_trade_volume, 0
        )
      const volumeDiff = volumeSum - prevVolumeSum

      const priceSum = data
        .slice(0, data.length / 2)
        .reduce((accumulator, object) =>
          accumulator + object.candle_acc_trade_price, 0
        )
      const prevPriceSum = data
        .slice(data.length / 2)
        .reduce((accumulator, object) =>
          accumulator + object.candle_acc_trade_price, 0
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

  async saveRankData(hours: HoursType, datetime: Date) {
    const { year, month, date, hour } = convertDatetime(datetime)
    const newDatetime = new Date(year, month, date, hour).toISOString()
    const ISONewDatetime = new Date(newDatetime)
    const prevTime = new Date(year, month, date, hour - hours).toISOString()
    const ISOPrevTime = new Date(prevTime)
    const prevDay = new Date(year, month, date - 1, hour).toISOString()
    const ISOPrevDay = new Date(prevDay)
    
    const exist = await this.tradeRankModel
      .find({
        datetime: ISOPrevTime
      })
      .exec()
    const data: ObjType[] =
      await this.calculate(hours, ISONewDatetime)

    let array = []
    for await (let value of krwTokens) {
      let obj = {}
      const exist = await this.tradeRankModel
      .find({
        market: value.market,
        datetime: ISOPrevTime
      })
      .exec()

      if (exist) {}
      else {
        const prevData = await this.tradeRankModel
          .findOne({
            market: value.market, datetime: ISOPrevTime
          })
          .exec()

        const prevDayData = await this.tradeRankModel
          .findOne({
            market: value.market, datetime: ISOPrevDay
          })
          .exec()
        
        const sortedDataByVolumeSum = cloneDeep(data).sort((a, b) => b[`volumeSum${hours}H`] - a[`volumeSum${hours}H`])
        const sortedDataByVolumeDiffRate = cloneDeep(data).sort((a, b) => b[`volumeDiffRate${hours}H`] - a[`volumeDiffRate${hours}H`])
        const sortedDataByPriceSum = cloneDeep(data).sort((a, b) => b[`priceSum${hours}H`] - a[`priceSum${hours}H`])
        const sortedDataByPriceDiff = cloneDeep(data).sort((a, b) => b[`priceDiff${hours}H`] - a[`priceDiff${hours}H`])
        const sortedDataByPriceDiffRate = cloneDeep(data).sort((a, b) => b[`priceDiffRate${hours}H`] - a[`priceDiffRate${hours}H`])
        const indexedData = data[data.findIndex(item => item.market = value.market)]
        
        obj['market'] = value.market
        obj['volumeSum'] = indexedData[`volumeSum${hours}H`]
        obj['priceSum'] = indexedData[`priceSum${hours}H`]
        obj['volumeDiff'] = indexedData[`volumeDiff${hours}H`]
        obj['priceDiff'] = indexedData[`priceDiff${hours}H`]
        obj['volumeDiffRate'] = indexedData[`volumeDiffRate${hours}H`]
        obj['priceDiffRate'] = indexedData[`priceDiffRate${hours}H`]
        obj['volumeSumRank'] = sortedDataByVolumeSum.findIndex(item => item.market === value.market) + 1
        obj['volumeDiffRateRank'] = sortedDataByVolumeDiffRate.findIndex(item => item.market === value.market) + 1
        obj['priceSumRank'] = sortedDataByPriceSum.findIndex(item => item.market === value.market) + 1
        obj['priceDiffRank'] = sortedDataByPriceDiff.findIndex(item => item.market === value.market) + 1
        obj['priceDiffRateRank'] = sortedDataByPriceDiffRate.findIndex(item => item.market === value.market) + 1
        obj['prevVolumeDiffRateRank'] = prevData ? prevData.volumeDiffRateRank : null
        obj['prevDayVolumeDiffRateRank'] = prevDayData ? prevDayData.volumeDiffRateRank : null
        obj['prevPriceDiffRank'] = prevData ? prevData.priceDiffRank : null
        obj['prevDayPriceDiffRank'] = prevDayData ? prevDayData.priceDiffRank : null
        obj['prevPriceDiffRateRank'] = prevData ? prevData.priceDiffRateRank : null
        obj['prevDayPriceDiffRateRank'] = prevDayData ? prevDayData.priceDiffRateRank : null
        obj['unit'] = hours
        obj['datetime'] = ISONewDatetime

        array.push(obj)
      }
      try {
        await this.tradeRankModel.insertMany(array)
      } catch(e) {
        throw new Error(e)
      }
    }
  }
}
