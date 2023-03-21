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
  prevVolumeDiffRateRank: number

  @Prop()
  prevDayVolumeDiffRateRank: number

  @Prop()
  prevPriceDiffRank: number

  @Prop()
  prevDayPriceDiffRank: number

  @Prop()
  prevPriceDiffRateRank: number

  @Prop()
  prevDayPriceDiffRateRank: number

  @Prop()
  datetime: string

  @Prop()
  unit: number
}
export const TradeRankSchema = SchemaFactory.createForClass(TradeRank)
