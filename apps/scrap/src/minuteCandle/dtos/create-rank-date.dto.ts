export class CreateRankDataDto {
  market: string
  volumeSum: number
  priceSum: number
  volumeDiff: number
  priceDiff: number
  volumeDiffRate: number
  priceDiffRate: number
  volumeSumRank: number
  unit: number
  datetime: string
}
