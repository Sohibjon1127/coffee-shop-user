import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'src/config';
import { RedisModule } from 'src/core/redis/redis.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: config.DB_URL,
      synchronize: config.DB_SYNC,
      entities: ['dist/core/entity/*.entity{.ts,.js}'],
      autoLoadEntities: true,
    }),
    JwtModule.register({
      global: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    RedisModule,
  ],
})
export class AppModule {}
