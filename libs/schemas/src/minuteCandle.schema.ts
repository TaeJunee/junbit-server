import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type MinuteCandleDocument = HydratedDocument<MinuteCandle>

@Schema()
export class MinuteCandle {
  @Prop()
  market: string

  @Prop()
  candle_date_time_utc: string

  @Prop()
  timestamp: string

  @Prop()
  candle_acc_trade_price: number

  @Prop()
  candle_acc_trade_volume: number

  @Prop()
  unit: number
}
export const MinuteCandleSchema = SchemaFactory.createForClass(MinuteCandle)
