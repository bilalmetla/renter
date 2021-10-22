
import { IsString, IsEmpty, IsNotEmpty } from 'class-validator';

export class Verifications  {
    
    @IsNotEmpty()
    @IsString()
    mobileNumber: string;


    otpCode?: number;

}

export class Activations{
    mobileNumber: number;
    smsCode: number;
    createdDate: Date;
    expiry: Date;
}
