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
    const baseTime = new Date(year, month, date - 14, hour).toISOString()
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
      .sort({ datetime: 1 })
      .limit(24)
      .exec()

    return { payload: data }
  }

  async findTokenPriceRankByDatetime(
    market: string,
    hours: HoursType,
    datetime: string,
  ) {
    const { year, month, date, hour } = convertDatetime(new Date(datetime))
    const baseTime = new Date(year, month, date - 14, hour).toISOString()
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
      .sort({ datetime: 1 })
      .limit(24)
      .exec()

    return { payload: data }
  }
}
