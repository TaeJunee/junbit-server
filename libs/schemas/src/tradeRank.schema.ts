import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type TradeRankDocument = HydratedDocument<TradeRank>

@Schema()
export class TradeRank {
  @Prop()
  market: string

  @Prop()
  volumeSum: number

  @Prop()
  priceSum: number

  @Prop()
  volumeSumRank: number

  @Prop()
  priceSumRank: number

  @Prop()
  volumeDiff: number

  @Prop()
  priceDiff: number

  @Prop()
  priceDiffRank: number

  @Prop()
  volumeDiffRate: number

  @Prop()
  priceDiffRate: number

  @Prop()
  volumeDiffRateRank: number

  @Prop()
  priceDiffRateRank: number

  @Prop()
  datetime: Date

  @Prop()
  unit: 1 | 2 | 4 | 8 | 12 | 24
}
export const TradeRankSchema = SchemaFactory.createForClass(TradeRank)
