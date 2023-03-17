import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { MinuteCandleService } from './minuteCandle.service'
import {
  MinuteCandle,
  MinuteCandleSchema,
} from '@lib/schemas/minuteCandle.schema'
import { Upbit } from '@lib/utils/upbit'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MinuteCandle.name, schema: MinuteCandleSchema },
    ]),
  ],
  providers: [MinuteCandleService, Upbit],
  exports: [MinuteCandleService, MongooseModule],
})
export class MinuteCandleModule {}
