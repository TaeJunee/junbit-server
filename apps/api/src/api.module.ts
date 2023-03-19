import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from '@lib/config/database/database.module'
import { TradeVolumeRankModule } from './tradeVolumeRank/tradeVolumeRank.module'
import { TradePriceRankModule } from './tradePriceRank/tradePriceRank.module'
import { ChartModule } from './chart/chart.module'
import { ApiController } from './api.controller'
import { ApiService } from './api.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    DatabaseModule,
    TradeVolumeRankModule,
    TradePriceRankModule,
    ChartModule,
  ],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
