
import { IsInt, IsEmpty, IsNotEmpty } from 'class-validator';

export class Verifications  {
    
    @IsNotEmpty()
    @IsInt()
    mobileNumber: number;


    otpCode?: number;

}

export class Activations{
    mobileNumber: number;
    smsCode: number;
    createdDate: Date;
    expiry: Date;
}
