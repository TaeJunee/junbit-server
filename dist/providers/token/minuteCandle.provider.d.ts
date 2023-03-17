import { DataSource } from 'typeorm';
import { Token } from 'src/entities/token.entity';
export declare const minuteCandleProviders: {
    provide: string | Function;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Token> & Pick<import("src/repositories/token.repository").TokenRepository, any>;
    inject: (string | Function | import("@nestjs/common").Type<DataSource>)[];
}[];
