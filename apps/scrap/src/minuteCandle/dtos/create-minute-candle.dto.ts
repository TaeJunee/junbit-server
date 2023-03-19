import { MinutesType } from 'types'

export class CreateMinuteCandleDto {
  market: string
  candle_date_time_utc: Date
  timestamp: string
  candle_acc_trade_price_price: number
  candle_acc_trade_volume_volume: number
  unit: MinutesType
}
