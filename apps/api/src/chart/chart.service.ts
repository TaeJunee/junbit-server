import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { TradeRank, TradeRankDocument } from '@lib/schemas/tradeRank.schema'
import { resolveDatetime } from '@lib/utils/datetime'

@Injectable()
export class ChartService {
  constructor(
    @InjectModel(TradeRank.name)
    private readonly tradeRankModel: Model<TradeRankDocument>,
  ) {}

  async findTokenVolumeRankByDatetime(
    market: string,
    hours: number,
    datetime: string,
  ) {
    const dateArray = []
    const { year, month, date, hour } = resolveDatetime(datetime)

    for (let i = 0; i < 24 * hours + 1; i += hours) {
      const tempDate = new Date(year, month, date, hour - i).toISOString()
      dateArray.push(tempDate)
    }

    const data = await this.tradeRankModel
      .find(
        {
          market,
          unit: hours,
          datetime: { $in: dateArray },
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

    return { payload: data }
  }

  async findTokenPriceRankByDatetime(
    market: string,
    hours: number,
    datetime: string,
  ) {
    const dateArray = []
    const { year, month, date, hour } = resolveDatetime(datetime)

    for (let i = 0; i < 24 * hours + 1; i += hours) {
      const tempDate = new Date(year, month, date, hour - i).toISOString()
      dateArray.push(tempDate)
    }

    const data = await this.tradeRankModel
      .find(
        {
          market,
          unit: hours,
          datetime: { $in: dateArray },
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

    return { payload: data }
  }
}
