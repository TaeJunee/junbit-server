import { Injectable, OnApplicationBootstrap } from '@nestjs/common'
import { MinuteCandleService } from './minuteCandle/minuteCandle.service'
import { TickerService } from './ticker/ticker.service'
import { makeInterval } from '@lib/utils/interval'
import { HoursType } from './types'
@Injectable()
export class ScrapService implements OnApplicationBootstrap {
  constructor(
    private readonly tickerService: TickerService,
    private readonly minuteCandleService: MinuteCandleService,
  ) {}
  async onApplicationBootstrap() {
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
      await this.minuteCandleService.create(60, 3)
      for await (let unit of unitList) {
        await this.minuteCandleService.saveRankData(unit, ISOBaseTime)
      }
      await this.tickerService.delete()
      await this.minuteCandleService.delete(60)
      console.log(`Done at ${ISOBaseTime}`)
    })
  }
}
