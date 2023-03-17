import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { TokenTradePriceRank } from '@lib/entities/token/tradePriceRank.entity'
import { GetTradePriceRankDto } from './dtos/get-trade-price-rank-dto'
import { MinuteCandleService } from '../minuteCandle/minuteCandle.service'
import { krwTokens } from '../infra/upbit/tokens'
import { convertDatetime } from '@lib/utils/datetime'

@Injectable()
export class TradePriceRankService {
  constructor(
    private readonly minuteCandleService: MinuteCandleService,
  ) {}


  async findAllByDatetime(hours: HoursType, datetime: Date) {



    return
  }
}
