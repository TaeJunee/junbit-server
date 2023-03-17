import { Injectable, OnApplicationBootstrap } from '@nestjs/common'
import { MinuteCandleService } from './minuteCandle/minuteCandle.service'
import { TradeVolumeRankService } from './tradeVolumeRank/tradeVolumeRank.service'
import { TickerService } from './ticker/ticker.service'
import { makeInterval } from '@lib/utils/interval'
import { TradePriceRankService } from './tradePriceRank/tradePriceRank.service'

@Injectable()
export class ScrapService implements OnApplicationBootstrap {
  constructor(
    private readonly tickerService: TickerService,
    private readonly minuteCandleService: MinuteCandleService,
    private readonly tradeVolumeRankService: TradeVolumeRankService,
    private readonly tradePriceRankService: TradePriceRankService,
  ) {}
  async onApplicationBootstrap() {
    // await this.minuteCandleService.create(60, 10)
    // console.log('start')
    // for (let i = 68; i < 69; i++) {
    //   const baseTime = new Date(2023, 2, 15, i + 1 + 9)
    //   console.log(baseTime)
    //   await this.minuteCandleService.saveRankData(1, baseTime)
    //   await this.minuteCandleService.saveRankData(2, baseTime)
    //   await this.minuteCandleService.saveRankData(4, baseTime)
    //   await this.minuteCandleService.saveRankData(8, baseTime)
    //   await this.minuteCandleService.saveRankData(12, baseTime)
    //   await this.minuteCandleService.saveRankData(24, baseTime)
    // }
    // console.log('done')

    const unitList: HoursType[] = [1, 2, 4, 8, 12, 24]
    makeInterval(async () => {
      const date = new Date()
      const baseTime = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours() - 1,
      ).toISOString()
      const ISOBaseTime = new Date(baseTime)
      await this.tickerService.create()
      await this.minuteCandleService.create(60, 3)
      for await (let unit of unitList) {
        await this.minuteCandleService.saveRankData(unit, ISOBaseTime)
      }
      await this.tickerService.delete()
      await this.minuteCandleService.delete(60)
      console.log(`Done at ${ISOBaseTime}`)
    })
    // const date = new Date()
    // const baseTime = new Date(
    //    date.getFullYear(),
    //    date.getMonth(),
    //    date.getDate(),
    //    date.getHours() - 1,
    // ).toISOString()
    // const ISOBaseTime = new Date(baseTime)

  }
}
