import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MongooseModule } from '@nestjs/mongoose'
import { MinuteCandleModule } from '../minuteCandle/minuteCandle.module'
import { TokenTradeVolumeRank } from '@lib/entities/token/tradeVolumeRank.entity'
import {
  MinuteCandle,
  MinuteCandleSchema,
} from '@lib/schemas/minuteCandle.schema'
import { TradeVolumeRankService } from './tradeVolumeRank.service'
import { MinuteCandleService } from '../minuteCandle/minuteCandle.service'
import { Upbit } from '@lib/utils/upbit'
@Module({
  imports: [
    TypeOrmModule.forFeature([TokenTradeVolumeRank]),
    MongooseModule.forFeature([
      { name: MinuteCandle.name, schema: MinuteCandleSchema },
    ]),
    MinuteCandleModule,
  ],
  providers: [TradeVolumeRankService, MinuteCandleService, Upbit],
})
export class TradeVolumeRankModule {}
