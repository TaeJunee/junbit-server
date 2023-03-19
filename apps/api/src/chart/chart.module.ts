import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { TradeRank, TradeRankSchema } from '@lib/schemas/tradeRank.schema'
import { ChartController } from './chart.controller'
import { ChartService } from './chart.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TradeRank.name, schema: TradeRankSchema },
    ]),
  ],
  controllers: [ChartController],
  providers: [ChartService],
})
export class ChartModule {}
