import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
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
