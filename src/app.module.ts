import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { VerificationsMobule } from "./Verification/module";
import { UserModule } from "./Users/module";

@Module({
  imports: [VerificationsMobule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
