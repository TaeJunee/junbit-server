import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TradeVolumeRankController } from './tradeVolumeRank.controller'
import { TokenTradeVolumeRank } from '@lib/entities/token/tradeVolumeRank.entity'
import { TradeVolumeRankService } from './tradeVolumeRank.service'

@Module({
  imports: [TypeOrmModule.forFeature([TokenTradeVolumeRank])],
  controllers: [TradeVolumeRankController],
  providers: [TradeVolumeRankService],
})
export class TradeVolumeRankModule {}
