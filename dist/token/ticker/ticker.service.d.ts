import { Model } from 'mongoose';
import { TickerDocument } from 'src/schemas/ticker.schema';
import { Upbit } from 'src/utils/upbit';
export declare class TickerService {
    private readonly tickerModel;
    private readonly upbit;
    constructor(tickerModel: Model<TickerDocument>, upbit: Upbit);
    create(): Promise<void>;
    delete(): Promise<void>;
    find(): Promise<void>;
}
