import { Test, TestingModule } from '@nestjs/testing'
import { MinuteCandleService } from './minuteCandle.service'
import { Model } from 'mongoose'
import { MinuteCandleDocument } from '@lib/schemas/minuteCandle.schema'

describe('MinuteCandleService', () => {
  let service: MinuteCandleService
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let model: Model<MinuteCandleDocument>

  beforeEach(async () => {
    // 테스트하기전에 실행
    const module: TestingModule = await Test.createTestingModule({
      providers: [MinuteCandleService, Model<MinuteCandleDocument>],
    }).compile()

    service = module.get<MinuteCandleService>(MinuteCandleService)
    model = module.get(Model<MinuteCandleDocument>)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  describe('create', () => {
    it('should save 115 data', async () => {
      jest.spyOn(service, 'create')
    })
  })
})
