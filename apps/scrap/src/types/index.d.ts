type HoursType = 1 | 2 | 3 | 4 | 8 | 12 | 24
type MinutesType = 30 | 60 | 120 | 180 | 240
type CreateMinuteCandle = {
  market: string
  candle_date_time_utc: Date
  candle_date_time_kst: Date
  opening_price: number
  low_price: number
  timestamp: string
  candle_acc_trade_price: number
  candle_acc_trade_volume: number
  unit: number
}

export interface ResponseType {
  market: string
  candle_date_time_utc: Date
  candle_date_time_kst: Date
  opening_price: number
  low_price: number
  timestamp: string
  candle_acc_trade_price: number
  candle_acc_trade_volume: number
  acc_trade_price_24h?: number
  acc_trade_volume_24h?: number
  unit: number
}

interface ObjType {
  market: string
  volumeSum1H?: number
  priceSum1H?: number
  volumeDiff1H?: number
  priceDiff1H?: number
  volumeDiffRate1H?: number
  priceDiffRate1H?: number
  volumeSum2H?: number
  priceSum2H?: number
  volumeDiff2H?: number
  priceDiff2H?: number
  volumeDiffRate2H?: number
  priceDiffRate2H?: number
  volumeSum4H?: number
  priceSum4H?: number
  volumeDiff4H?: number
  priceDiff4H?: number
  volumeDiffRate4H?: number
  priceDiffRate4H?: number
  volumeSum8H?: number
  priceSum8H?: number
  volumeDiff8H?: number
  priceDiff8H?: number
  volumeDiffRate8H?: number
  priceDiffRate8H?: number
  volumeSum12H?: number
  priceSum12H?: number
  volumeDiff12H?: number
  priceDiff12H?: number
  volumeDiffRate12H?: number
  priceDiffRate12H?: number
  volumeSum24H?: number
  priceSum24H?: number
  volumeDiff24H?: number
  priceDiff24H?: number
  volumeDiffRate24H?: number
  priceDiffRate24H?: number
  datetime: Date
}

