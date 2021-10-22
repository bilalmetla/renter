import { Controller, Post, Body, } from "@nestjs/common";
import { VerificationsService } from "./service";
import { Verifications } from "./model";



@Controller('verifications')
export class VerificationsController {
    constructor(private readonly verificationsService: VerificationsService){}


    @Post('user')
    async verifyMobileNumber(
        @Body() body: Verifications 
    ) {
        try {
            console.log('request: ', body)
            const resp = await this.verificationsService.createVerification(body);
            console.log('response: ', resp)
            return resp;
            
        } catch (ex) {
            console.log(ex.stack)
            return {resultCode: 500}
        }
        
    }

    @Post('otp')
    async verifyOTP(
        @Body() body: Verifications 
    ) {
        try {
            console.log('request: ', body)
            const resp = await this.verificationsService.verifyMobileNumber(body);
            console.log('response: ', resp)
            return resp;
            
        } catch (ex) {
            console.log(ex.stack)
            return {resultCode: 500}
        }
        
    }
}