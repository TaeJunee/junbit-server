import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { TradeRank, TradeRankDocument } from '@lib/schemas/tradeRank.schema'

@Injectable()
export class TradePriceRankService {
  constructor(
    @InjectModel(TradeRank.name)
    private readonly tradeRankModel: Model<TradeRankDocument>,
  ) {}

  async findRankByDatetime(hours: number, datetime: Date) {
    const data = await this.tradeRankModel
      .find(
        { unit: hours, datetime },
        {
          _id: 0,
          unit: 1,
          market: 1,
          datetime: 1,
          korean_name: 1,
          english_name: 1,
          priceDiff: 1,
          priceDiffRate: 1,
          priceDiffRank: 1,
          priceDiffRateRank: 1,
          prevPriceDiffRank: 1,
          prevPriceDiffRateRank: 1,
          prevDayPriceDiffRank: 1,
          prevDayPriceDiffRateRank: 1,
        },
      )
      .exec()

    return { payload: data }
  }
}
