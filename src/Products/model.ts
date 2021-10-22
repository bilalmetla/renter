import {
    IsInt, IsEmpty, IsNotEmpty,
    IsString, IsArray
} from 'class-validator';


export class Products {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsInt()
    mobileNumber: number;

    @IsNotEmpty()
    @IsString()
    City: string;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsArray()
    location?: number;
}