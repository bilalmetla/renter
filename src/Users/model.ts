import {
    IsInt, IsEmpty, IsNotEmpty,
    IsString, IsArray
} from 'class-validator';


export class Users {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    mobileNumber: string;

    @IsNotEmpty()
    @IsString()
    city: string;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsArray()
    location?: number;
}