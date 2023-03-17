import { OnApplicationBootstrap } from '@nestjs/common';
import { MinuteCandleService } from './minuteCandle/minuteCandle.service';
import { TickerService } from './ticker/ticker.service';
import { TradeVolumeRankService } from './tradeVolumeRank/tradeVolumeRank1H.service';
export declare class TokenService implements OnApplicationBootstrap {
    private readonly minuteCandleService;
    private readonly tickerService;
    private readonly tradeVolumeRankService;
    constructor(minuteCandleService: MinuteCandleService, tickerService: TickerService, tradeVolumeRankService: TradeVolumeRankService);
    onApplicationBootstrap(): Promise<void>;
}
