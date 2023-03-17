import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from '@lib/config/database/database.module'
import { TradeVolumeRankModule } from './tradeVolumeRank/tradeVolumeRank.module'
import { TradePriceRankModule } from './tradePriceRank/tradePriceRank.module'
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
  ],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
