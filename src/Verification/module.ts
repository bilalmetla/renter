import { Module } from "@nestjs/common";
import { VerificationsController } from "./controller";
import { VerificationsService } from "./service";




@Module({
    controllers: [VerificationsController],
    providers: [VerificationsService,    ]
})
export class VerificationsMobule {}