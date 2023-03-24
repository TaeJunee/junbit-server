import { Controller, Get, Query } from '@nestjs/common'
import { TradeVolumeRankService } from './tradeVolumeRank.service'

@Controller('token')
export class TradeVolumeRankController {
  constructor(
    private readonly tradeVolumeRankService: TradeVolumeRankService,
  ) {}

  @Get('trade-volume-rank')
  findRankByDatetime(
    @Query('unit') hours: number,
    @Query('datetime') datetime: Date,
  ) {
    return this.tradeVolumeRankService.findRankByDatetime(hours, datetime)
  }
}
