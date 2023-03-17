export class GetTradePriceRankDto {
  diffRank: number
  diffRateRank: number
  prevDiffRank: number
  prevDiffRateRank: number
  prevDayDiffRank: number
  prevDayDiffRateRank: number
  market: string
  priceDiff: number
  priceDiffRate: number
  datetime: Date
}
