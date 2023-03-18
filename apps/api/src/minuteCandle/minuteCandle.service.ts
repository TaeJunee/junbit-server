import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import {
  MinuteCandle,
  MinuteCandleDocument,
} from '@lib/schemas/minuteCandle.schema'
import { krwTokens } from '../infra/upbit/tokens'
import { convertDatetime } from '@lib/utils/datetime'

@Injectable()
export class MinuteCandleService {
  constructor(
    @InjectModel(MinuteCandle.name)
    private readonly minuteCandleModel: Model<MinuteCandleDocument>,
  ) {}
}
