import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { MongooseModule } from '@nestjs/mongoose'
import { TokenTradeVolumeRank } from '../../../entities/src/token/tradeVolumeRank.entity'
import { TokenTradePriceRank } from '@lib/entities/token/tradePriceRank.entity'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('MYSQL_HOSTNAME'),
        port: configService.get('MYSQL_PORT'),
        username: configService.get('MYSQL_USERNAME'),
        password: configService.get('MYSQL_PASSWORD'),
        database: configService.get('MYSQL_DATABASE'),
        entities: [TokenTradeVolumeRank, TokenTradePriceRank],
        namingStrategy: new SnakeNamingStrategy(),
        timezone: 'Z',
        synchronize: true,
      }),
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGODB_URI'),
        dbName:
          process.env.NODE_ENV === 'development'
            ? 'junbit-dev'
            : process.env.NODE_ENV === 'production'
            ? 'junbit-prod'
            : 'junbit-local',
      }),
    }),
  ],
})
export class DatabaseModule {}
