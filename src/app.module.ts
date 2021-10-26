import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { VerificationsMobule } from "./Verification/module";
import { UserModule } from "./Users/module";
import { ProductModule } from "./Products/module";
import { HttpErrorFilter } from "./shared/http-error";


@Module({
  imports: [VerificationsMobule, UserModule, ProductModule],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter
  }
  ],
})
export class AppModule {}
