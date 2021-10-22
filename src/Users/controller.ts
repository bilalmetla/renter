import { Body, Controller, Post } from "@nestjs/common";
import { Users } from "./model";
import { UserService } from "./service";

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UserService){}

    @Post()
    async postUser(
        @Body() body: Users
    ) {
        try {
            console.log('request: ', body)
            const resp = await this.userService.create(body);
            console.log('response: ', resp)
            return resp;
            
        }catch (ex) {
            console.log(ex.stack)
            return {resultCode: 500}
        }
        
    }
}