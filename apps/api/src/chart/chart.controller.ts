import { Controller, Get, Query } from '@nestjs/common'
import { ChartService } from './chart.service'

@Controller('token')
export class ChartController {
  constructor(private readonly chartService: ChartService) {}

  @Get('chart/volume')
  findTokenVolumeRankByDatetime(
    @Query('market') market: string,
    @Query('unit') hours: HoursType,
    @Query('datetime') datetime: string,
  ) {
    return this.chartService.findTokenVolumeRankByDatetime(
      market,
      hours,
      datetime,
    )
  }

  @Get('chart/price')
  findTokenPriceRankByDatetime(
    @Query('market') market: string,
    @Query('unit') hours: HoursType,
    @Query('datetime') datetime: string,
  ) {
    return this.chartService.findTokenPriceRankByDatetime(
      market,
      hours,
      datetime,
    )
  }
}
