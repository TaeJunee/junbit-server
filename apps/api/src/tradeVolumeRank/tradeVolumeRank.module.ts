import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { TradeRank, TradeRankSchema } from '@lib/schemas/tradeRank.schema'
import { TradeVolumeRankController } from './tradeVolumeRank.controller'
import { TradeVolumeRankService } from './tradeVolumeRank.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TradeRank.name, schema: TradeRankSchema },
    ]),
  ],
  controllers: [TradeVolumeRankController],
  providers: [TradeVolumeRankService],
})
export class TradeVolumeRankModule {}
