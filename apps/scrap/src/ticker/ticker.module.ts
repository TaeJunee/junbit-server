import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { TickerService } from './ticker.service'
import { Ticker, TickerSchema } from '@lib/schemas/ticker.schema'
import { Upbit } from '@lib/utils/upbit'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ticker.name, schema: TickerSchema }]),
  ],
  providers: [TickerService, Upbit],
  exports: [TickerService, MongooseModule],
})
export class TickerModule {}
