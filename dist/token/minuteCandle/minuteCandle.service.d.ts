import { Model } from 'mongoose';
import { MinuteCandleDocument } from 'src/schemas/minute-candle.schema';
import { Upbit } from 'src/utils/upbit';
import { FindMinuteCandleDto } from './dtos/find-minute-dto';
type MinutesType = 30 | 60 | 120 | 180 | 240;
export type HoursType = 1 | 2 | 3 | 4 | 8 | 12;
export declare class MinuteCandleService {
    private readonly minuteCandleModel;
    private readonly upbit;
    constructor(minuteCandleModel: Model<MinuteCandleDocument>, upbit: Upbit);
    create(unit: MinutesType, count: number): Promise<void>;
    delete(unit: MinutesType): Promise<void>;
    find(hours: HoursType, baseTime: Date, loop?: boolean): Promise<any | FindMinuteCandleDto[]>;
}
export {};
