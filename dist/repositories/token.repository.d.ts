import { Repository } from 'typeorm';
import { Token } from 'src/entities/token.entity';
export interface TokenRepository extends Repository<Token> {
    this: Repository<Token>;
    getTokenCandle(marketTable: string, date: string): Promise<any>;
}
export declare const CustomTokenRepository: Pick<TokenRepository, any>;
