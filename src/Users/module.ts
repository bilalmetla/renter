import { Module } from "@nestjs/common";
import { UsersController } from "./controller";
import { UserService } from "./service";


@Module({
    controllers: [UsersController],
    providers: [UserService]
})
export class UserModule {}