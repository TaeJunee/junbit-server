import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { TokenTradeVolumeRank } from '@lib/entities/token/tradeVolumeRank.entity'
import { MinuteCandleService } from '../minuteCandle/minuteCandle.service'
import { convertDatetime } from '@lib/utils/datetime'
import { FindMinuteCandleVolumeDto } from './dtos/find-minut-candle-volume.dto'
import { HoursType } from '../types'

@Injectable()
export class TradeVolumeRankService {
  constructor(
    @InjectRepository(TokenTradeVolumeRank)
    private readonly tokenTradeVolumeRankRepsitory: Repository<TokenTradeVolumeRank>,
    private readonly minuteCandleService: MinuteCandleService,
  ) {}

  // async create(hours: HoursType, baseTime: Date) {
  //   console.log(`Creating ${hours}H of base time ${baseTime}`)
  //   const data: FindMinuteCandleVolumeDto[] = await this.minuteCandleService.findByMarketAndDatetime(
  //     hours,
  //     baseTime,
  //     'VOLUME',
  //   )

  //   if (data.length === 0) {
  //     return
  //   }

  //   const sortedDataByDiffRate = data.sort(
  //     (a: FindMinuteCandleVolumeDto, b: FindMinuteCandleVolumeDto) =>
  //       b.volumeDiffRate - a.volumeDiffRate,
  //   )

  //   const { year, month, date, hour } = convertDatetime(baseTime)
  //   const newBaseTime = new Date(year, month, date, hour).toISOString()
  //   const ISONewBaseTime = new Date(newBaseTime)
  //   const prevTime = new Date(year, month, date, hour - hours).toISOString()
  //   const ISOPrevTime = new Date(prevTime)
  //   const prevDay = new Date(year, month, date - 1, hour).toISOString()
  //   const ISOPrevDay = new Date(prevDay)

  //   this.tokenTradeVolumeRankRepsitory.metadata.tablePath = `trade_volume_rank_${hours}h`

  //   try {
  //     for await (let value of data) {
  //       await this.findIdByDatetime(value.market, hours, ISONewBaseTime).then(
  //         async (res) => {
  //           if (res) {
  //           } else {
  //             const prevRank = await this.findRankByDatetime(
  //               value.market,
  //               hours,
  //               ISOPrevTime,
  //             )
  //             const prevDayRank = await this.findRankByDatetime(
  //               value.market,
  //               hours,
  //               ISOPrevDay,
  //             )
  //             const tradeVolumeRank = this.tokenTradeVolumeRankRepsitory.create(
  //               {
  //                 diffRateRank:
  //                   sortedDataByDiffRate.findIndex(
  //                     (item) => item.market === value.market,
  //                   ) + 1,
  //                 prevDiffRateRank: prevRank
  //                   ? prevRank.diffRateRank
  //                   : undefined,
  //                 prevDayDiffRateRank: prevDayRank
  //                   ? prevDayRank.diffRateRank
  //                   : undefined,
  //                 market: value.market,
  //                 volumeDiff: value.volumeDiff,
  //                 volumeDiffRate: value.volumeDiffRate,
  //                 datetime: ISONewBaseTime,
  //               },
  //             )

  //             await this.tokenTradeVolumeRankRepsitory.save(tradeVolumeRank)
  //           }
  //         },
  //       )
  //     }
  //   } catch (e: any) {
  //     throw Error(e)
  //   }
  // }

  async delete(hours: HoursType, datetime: Date) {
    const { year, month, date, hour } = convertDatetime(datetime)
    const baseTime = new Date(year, month, date - 7, hour).toISOString()
    const ISOBaseTime = new Date(baseTime)

    this.tokenTradeVolumeRankRepsitory.metadata.tablePath = `trade_volume_rank_${hours}h`

    await this.tokenTradeVolumeRankRepsitory
      .createQueryBuilder()
      .delete()
      .from(`trade_volume_rank_${hours}h`)
      .where('datetime < :datetime', { datetime: ISOBaseTime })
      .execute()
  }

  async findRankByDatetime(market: string, hours: HoursType, datetime: Date) {
    this.tokenTradeVolumeRankRepsitory.metadata.tablePath = `trade_volume_rank_${hours}h`

    return await this.tokenTradeVolumeRankRepsitory.findOne({
      select: { diffRateRank: true },
      where: { market: market, datetime: datetime },
    })
  }

  async findIdByDatetime(market: string, hours: HoursType, datetime: Date) {
    this.tokenTradeVolumeRankRepsitory.metadata.tablePath = `trade_volume_rank_${hours}h`

    return await this.tokenTradeVolumeRankRepsitory.findOne({
      select: { id: true },
      where: { market: market, datetime: datetime },
    })
  }
}
