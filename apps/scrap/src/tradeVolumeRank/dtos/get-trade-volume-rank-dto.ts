export class GetTradeVolumeRankDto {
  diffRateRank: number
  prevDiffRateRank: number
  prevDayDiffRateRank: number
  market: string
  volumeDiff: number
  volumeDiffRate: number
  datetime: Date
}
