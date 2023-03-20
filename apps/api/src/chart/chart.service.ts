import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { TradeRank, TradeRankDocument } from '@lib/schemas/tradeRank.schema'
import { convertDatetime } from '@lib/utils/datetime'

@Injectable()
export class ChartService {
  constructor(
    @InjectModel(TradeRank.name)
    private readonly tradeRankModel: Model<TradeRankDocument>,
  ) {}

  async findTokenVolumeRankByDatetime(
    market: string,
    hours: HoursType,
    datetime: string,
  ) {
    const { year, month, date, hour } = convertDatetime(new Date(datetime))
    let baseTime: Date

    switch (hours) {
      case 1:
        baseTime = new Date(year, month, date - 1, hour)
        break
      case 2:
        baseTime = new Date(year, month, date - 2, hour)
        break
      case 4:
        baseTime = new Date(year, month, date - 4, hour)
        break
      case 8:
        baseTime = new Date(year, month, date - 8, hour)
        break
      case 12:
        baseTime = new Date(year, month, date - 12, hour)
        break
      case 24:
        baseTime = new Date(year, month, date - 24, hour)
        break
      default:
        baseTime = new Date(year, month, date - 1, hour)
        break
    }

    const ISOBaseTime = new Date(baseTime)

    const data = await this.tradeRankModel
      .find(
        {
          market,
          unit: hours,
          datetime: { $lte: datetime, $gte: ISOBaseTime },
        },
        {
          _id: 0,
          unit: 1,
          market: 1,
          datetime: 1,
          volumeSum: 1,
          volumeSumRank: 1,
          volumeDiffRateRank: 1,
        },
      )
      .sort({ datetime: -1 })
      .limit(24)
      .exec()

    data.sort((a, b) => {
      if (a.datetime > b.datetime) return 1
      if (a.datetime < b.datetime) return -1
      return 0
    })

    return { payload: data }
  }

  async findTokenPriceRankByDatetime(
    market: string,
    hours: HoursType,
    datetime: string,
  ) {
    const { year, month, date, hour } = convertDatetime(new Date(datetime))
    let baseTime: Date

    switch (hours) {
      case 1:
        baseTime = new Date(year, month, date - 1, hour)
        break
      case 2:
        baseTime = new Date(year, month, date - 2, hour)
        break
      case 4:
        baseTime = new Date(year, month, date - 4, hour)
        break
      case 8:
        baseTime = new Date(year, month, date - 8, hour)
        break
      case 12:
        baseTime = new Date(year, month, date - 12, hour)
        break
      case 24:
        baseTime = new Date(year, month, date - 24, hour)
        break
      default:
        baseTime = new Date(year, month, date - 1, hour)
        break
    }

    const ISOBaseTime = new Date(baseTime)

    const data = await this.tradeRankModel
      .find(
        {
          market,
          unit: hours,
          datetime: { $lte: datetime, $gte: ISOBaseTime },
        },
        {
          _id: 0,
          unit: 1,
          market: 1,
          datetime: 1,
          priceSum: 1,
          priceSumRank: 1,
          priceDiffRank: 1,
          priceDiffRateRank: 1,
        },
      )
      .sort({ datetime: -1 })
      .limit(24)
      .exec()

    data.sort((a, b) => {
      if (a.datetime > b.datetime) return 1
      if (a.datetime < b.datetime) return -1
      return 0
    })

    return { payload: data }
  }
}
