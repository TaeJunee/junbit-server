import { TradeVolumeRankService } from "./tradeVolumeRank/tradeVolumeRank1H.service";
import { HoursType } from "./minuteCandle/minuteCandle.service";
export declare class TokenController {
    private readonly tradeVolumeRankService;
    constructor(tradeVolumeRankService: TradeVolumeRankService);
    hi(): Promise<string>;
    findAndSortByRank(datetime: Date, unit: HoursType): Promise<{
        payload: import("./tradeVolumeRank/dtos/get-trade-volume-rank-dto").GetTradeVolumeRankDto[];
    }>;
}
