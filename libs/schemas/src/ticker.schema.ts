import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type TickerDocument = HydratedDocument<Ticker>

@Schema()
export class Ticker {
  @Prop()
  market: string

  @Prop()
  acc_trade_price_24h: number

  @Prop()
  acc_trade_volume_24h: number

  @Prop()
  created_at: Date
}
export const TickerSchema = SchemaFactory.createForClass(Ticker)
