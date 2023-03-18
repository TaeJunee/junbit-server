import { Controller, Get, Query } from '@nestjs/common'
import { TradePriceRankService } from './tradePriceRank.service'

@Controller('token')
export class TradePriceRankController {
  constructor(private readonly tradePriceRankService: TradePriceRankService) {}

  @Get('trade-price-rank')
  findAllByDatetime(
    @Query('unit') hours: HoursType,
    @Query('datetime') datetime: Date,
  ) {
    return this.tradePriceRankService.findAllByDatetime(hours, datetime)
  }
}
