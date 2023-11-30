import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { FeaturesModule } from './features/features.module';

@Module({
  imports: [ConfigModule, FeaturesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
