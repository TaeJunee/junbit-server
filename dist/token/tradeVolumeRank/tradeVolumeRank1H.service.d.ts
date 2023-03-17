import { Repository } from 'typeorm';
import { TokenTradeVolumeRank } from 'src/entities/token/tradeVolumeRank1H.entity';
import { HoursType, MinuteCandleService } from '../minuteCandle/minuteCandle.service';
import { GetTradeVolumeRankDto } from './dtos/get-trade-volume-rank-dto';
export declare class TradeVolumeRankService {
    private readonly tokenTradeVolumeRankRepsitory;
    private readonly minuteCandleService;
    constructor(tokenTradeVolumeRankRepsitory: Repository<TokenTradeVolumeRank>, minuteCandleService: MinuteCandleService);
    create(hours: HoursType, baseTime: Date): Promise<void>;
    findRankByDatetime(market: string, hours: HoursType, datetime: Date): Promise<TokenTradeVolumeRank | null>;
    findIdByDatetime(market: string, hours: HoursType, datetime: Date): Promise<TokenTradeVolumeRank | null>;
    findAllByDatetime(hours: HoursType, datetime: Date): Promise<{
        payload: GetTradeVolumeRankDto[];
    }>;
}
