import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from '@lib/config/database/database.module'
import { MinuteCandleModule } from './minuteCandle/minuteCandle.module'
import { TickerModule } from './ticker/ticker.module'
import { TradeVolumeRankModule } from './tradeVolumeRank/tradeVolumeRank.module'
import { ScrapService } from './scrap.service'
import { TickerService } from './ticker/ticker.service'
import { MinuteCandleService } from './minuteCandle/minuteCandle.service'
import { TradeVolumeRankService } from './tradeVolumeRank/tradeVolumeRank.service'
import { Upbit } from '@lib/utils/upbit'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TokenTradeVolumeRank } from '@lib/entities/token/tradeVolumeRank.entity'
import { TradePriceRankService } from './tradePriceRank/tradePriceRank.service'
import { TokenTradePriceRank } from '@lib/entities/token/tradePriceRank.entity'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forFeature([TokenTradeVolumeRank, TokenTradePriceRank]),
    DatabaseModule,
    MinuteCandleModule,
    TickerModule,
    TradeVolumeRankModule,
  ],
  providers: [
    ScrapService,
    TickerService,
    MinuteCandleService,
    TradeVolumeRankService,
    TradePriceRankService,
    Upbit,
  ],
})
export class ScrapModule {}
