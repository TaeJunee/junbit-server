import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from '@lib/config/database/database.module'
import { MinuteCandleModule } from './minuteCandle/minuteCandle.module'
import { TickerModule } from './ticker/ticker.module'
import { ScrapService } from './scrap.service'
import { TickerService } from './ticker/ticker.service'
import { MinuteCandleService } from './minuteCandle/minuteCandle.service'
import { Upbit } from '@lib/utils/upbit'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    DatabaseModule,
    MinuteCandleModule,
    TickerModule,
  ],
  providers: [
    ScrapService,
    TickerService,
    MinuteCandleService,
    Upbit,
  ],
})
export class ScrapModule {}
