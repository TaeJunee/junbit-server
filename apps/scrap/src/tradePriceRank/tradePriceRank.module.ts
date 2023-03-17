import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MongooseModule } from '@nestjs/mongoose'
import { MinuteCandleModule } from '../minuteCandle/minuteCandle.module'
import { TokenTradePriceRank } from '@lib/entities/token/tradePriceRank.entity'
import {
  MinuteCandle,
  MinuteCandleSchema,
} from '@lib/schemas/minuteCandle.schema'
import { TradePriceRankService } from './tradePriceRank.service'
import { MinuteCandleService } from '../minuteCandle/minuteCandle.service'
import { Upbit } from '@lib/utils/upbit'
@Module({
  imports: [
    TypeOrmModule.forFeature([TokenTradePriceRank]),
    MongooseModule.forFeature([
      { name: MinuteCandle.name, schema: MinuteCandleSchema },
    ]),
    MinuteCandleModule,
  ],
  providers: [TradePriceRankService, MinuteCandleService, Upbit],
})
export class TradePriceRankModule {}
