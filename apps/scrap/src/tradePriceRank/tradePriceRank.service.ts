import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { TokenTradePriceRank } from '@lib/entities/token/tradePriceRank.entity'
import { MinuteCandleService } from '../minuteCandle/minuteCandle.service'
import { convertDatetime } from '@lib/utils/datetime'
import { cloneDeep } from 'lodash'
import { FindMinuteCandlePriceDto } from './dtos/find-minute-candle-price.dto'
import { HoursType } from '../types'


@Injectable()
export class TradePriceRankService {
  constructor(
    @InjectRepository(TokenTradePriceRank)
    private readonly tokenTradePriceRankRepsitory: Repository<TokenTradePriceRank>,
    private readonly minuteCandleService: MinuteCandleService,
  ) {}

  // async create(hours: HoursType, baseTime: Date) {
  //   console.log(`Creating ${hours}H of base time ${baseTime}`)
  //   const data: FindMinuteCandlePriceDto[] = await this.minuteCandleService.findByMarketAndDatetime(
  //     hours,
  //     baseTime,
  //     'PRICE',
  //   )

  //   if (data.length === 0) {
  //     console.log('No Data from MongoDB')
  //     return
  //   }

  //   const sortedDataByDiff = data.sort(
  //     (a: FindMinuteCandlePriceDto, b: FindMinuteCandlePriceDto) =>
  //       b.priceDiff - a.priceDiff,
  //   )

  //   const sortedDataByDiffClone = cloneDeep(sortedDataByDiff)

  //   const sortedDataByDiffRate = data.sort(
  //     (a: FindMinuteCandlePriceDto, b: FindMinuteCandlePriceDto) =>
  //       b.priceDiffRate - a.priceDiffRate,
  //   )

  //   const { year, month, date, hour } = convertDatetime(baseTime)
  //   const newBaseTime = new Date(year, month, date, hour).toISOString()
  //   const ISONewBaseTime = new Date(newBaseTime)
  //   const prevTime = new Date(year, month, date, hour - hours).toISOString()
  //   const ISOPrevTime = new Date(prevTime)
  //   const prevDay = new Date(year, month, date - 1, hour).toISOString()
  //   const ISOPrevDay = new Date(prevDay)

  //   this.tokenTradePriceRankRepsitory.metadata.tablePath = `trade_price_rank_${hours}h`

  //   try {
  //     for await (let value of data) {
  //       await this.findIdByDatetime(value.market, hours, ISONewBaseTime).then(
  //         async (res: TokenTradePriceRank) => {
  //           if (res) {
  //             console.log(res)
  //           } else {
  //             const prevRank: TokenTradePriceRank =
  //               await this.findRankByDatetime(
  //                 value.market,
  //                 hours,
  //                 ISOPrevTime,
  //                 'DIFF',
  //               )
  //             const prevDayRank: TokenTradePriceRank =
  //               await this.findRankByDatetime(
  //                 value.market,
  //                 hours,
  //                 ISOPrevDay,
  //                 'DIFF',
  //               )
  //             const prevRateRank: TokenTradePriceRank =
  //               await this.findRankByDatetime(
  //                 value.market,
  //                 hours,
  //                 ISOPrevTime,
  //                 'DIFF_RATE',
  //               )
  //             const prevDayRateRank: TokenTradePriceRank =
  //               await this.findRankByDatetime(
  //                 value.market,
  //                 hours,
  //                 ISOPrevDay,
  //                 'DIFF_RATE',
  //               )
  //             const tradePriceRank = this.tokenTradePriceRankRepsitory.create({
  //               diffRank:
  //                 sortedDataByDiffClone.findIndex(
  //                   (item) => item.market === value.market,
  //                 ) + 1,
  //               diffRateRank:
  //                 sortedDataByDiffRate.findIndex(
  //                   (item) => item.market === value.market,
  //                 ) + 1,
  //               prevDiffRank: prevRank ? prevRank.diffRank : undefined,
  //               prevDiffRateRank: prevRateRank
  //                 ? prevRateRank.diffRateRank
  //                 : undefined,
  //               prevDayDiffRank: prevDayRank ? prevDayRank.diffRank : undefined,
  //               prevDayDiffRateRank: prevDayRateRank
  //                 ? prevDayRateRank.diffRateRank
  //                 : undefined,
  //               market: value.market,
  //               priceDiff: value.priceDiff,
  //               priceDiffRate: value.priceDiffRate,
  //               datetime: ISONewBaseTime,
  //             })

  //             await this.tokenTradePriceRankRepsitory.save(tradePriceRank)
  //           }
  //         },
  //       )
  //     }
  //   } catch (e: any) {
  //     throw Error(e)
  //   }
  // }

  async delete(hours: HoursType, datetime: Date): Promise<void> {
    const { year, month, date, hour } = convertDatetime(datetime)
    const baseTime = new Date(year, month, date - 7, hour).toISOString()
    const ISOBaseTime = new Date(baseTime)

    this.tokenTradePriceRankRepsitory.metadata.tablePath = `trade_price_rank_${hours}h`

    await this.tokenTradePriceRankRepsitory
      .createQueryBuilder()
      .delete()
      .from(`trade_price_rank_${hours}h`)
      .where('datetime < :datetime', { datetime: ISOBaseTime })
      .execute()
  }

  async findRankByDatetime<T extends TokenTradePriceRank>(
    market: string,
    hours: HoursType,
    datetime: Date,
    type: 'DIFF' | 'DIFF_RATE',
  ): Promise<T> {
    this.tokenTradePriceRankRepsitory.metadata.tablePath = `trade_price_rank_${hours}h`

    if (type === 'DIFF_RATE') {
      return (await this.tokenTradePriceRankRepsitory.findOne({
        select: { diffRateRank: true },
        where: { market: market, datetime: datetime },
      })) as T
    } else if (type === 'DIFF') {
      return (await this.tokenTradePriceRankRepsitory.findOne({
        select: { diffRank: true },
        where: { market: market, datetime: datetime },
      })) as T
    }
  }

  async findIdByDatetime(market: string, hours: HoursType, datetime: Date) {
    this.tokenTradePriceRankRepsitory.metadata.tablePath = `trade_price_rank_${hours}h`

    return await this.tokenTradePriceRankRepsitory.findOne({
      select: { id: true },
      where: { market: market, datetime: datetime },
    })
  }
}
