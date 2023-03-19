import { Injectable, OnApplicationBootstrap } from '@nestjs/common'
import { MinuteCandleService } from './minuteCandle/minuteCandle.service'
import { makeInterval } from '@lib/utils/interval'

@Injectable()
export class ScrapService implements OnApplicationBootstrap {
  constructor(private readonly minuteCandleService: MinuteCandleService) {}
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
      await this.minuteCandleService.delete(ISOBaseTime)
      console.log(`Done at ${ISOBaseTime}`)
    })
  }
}
