import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TradePriceRankController } from './tradePriceRank.controller'
import { TokenTradePriceRank } from '@lib/entities/token/tradePriceRank.entity'
import { TradePriceRankService } from './tradePriceRank.service'

@Module({
  imports: [TypeOrmModule.forFeature([TokenTradePriceRank])],
  controllers: [TradePriceRankController],
  providers: [TradePriceRankService],
})
export class TradePriceRankModule {}
