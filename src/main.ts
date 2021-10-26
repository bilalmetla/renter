import { NestFactory,  } from '@nestjs/core';
import { ValidationPipe, ValidationError, BadRequestException } from "@nestjs/common";

import { AppModule } from './app.module';
import { DB } from "./db";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({
    disableErrorMessages: true,
    exceptionFactory: (validationErrors: ValidationError[] = []) => {
      console.log(validationErrors)
      return new BadRequestException(validationErrors);
    },
  }));
  global.db = await new DB().getConnection();
  await app.listen(3000);
}
bootstrap();
