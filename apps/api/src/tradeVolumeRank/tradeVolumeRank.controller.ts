import { Controller, Get, Query } from '@nestjs/common'
import { TradeVolumeRankService } from './tradeVolumeRank.service'

@Controller('token')
export class TradeVolumeRankController {
  constructor(
    private readonly tradeVolumeRankService: TradeVolumeRankService,
  ) {}

  @Get('trade-volume-rank')
  findAllByDatetime(
    @Query('unit') hours: HoursType,
    @Query('datetime') datetime: Date,
  ) {
    return this.tradeVolumeRankService.findAllByDatetime(datetime, hours)
  }
}
