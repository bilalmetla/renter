import {
    IsInt, IsEmpty, IsNotEmpty,
    IsString, IsArray
} from 'class-validator';


export class Users {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsInt()
    mobileNumber: string;

    @IsNotEmpty()
    @IsString()
    City: string;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsArray()
    location?: number;
}