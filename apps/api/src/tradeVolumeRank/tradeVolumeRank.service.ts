import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { TradeRank, TradeRankDocument } from '@lib/schemas/tradeRank.schema'

@Injectable()
export class TradeVolumeRankService {
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
          volumeDiff: 1,
          volumeDiffRate: 1,
          volumeDiffRateRank: 1,
          prevVolumeDiffRank: 1,
          prevVolumeDiffRateRank: 1,
          prevDayVolumeDiffRank: 1,
          prevDayVolumeDiffRateRank: 1,
        },
      )
      .exec()

    return { payload: data }
  }
}
