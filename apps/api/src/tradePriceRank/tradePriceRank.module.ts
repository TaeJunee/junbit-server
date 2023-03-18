import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { TradeRank, TradeRankSchema } from '@lib/schemas/tradeRank.schema'
import { TradePriceRankController } from './tradePriceRank.controller'
import { TradePriceRankService } from './tradePriceRank.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TradeRank.name, schema: TradeRankSchema },
    ]),
  ],
  controllers: [TradePriceRankController],
  providers: [TradePriceRankService],
})
export class TradePriceRankModule {}
