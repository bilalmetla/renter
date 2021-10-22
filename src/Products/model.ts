import {
    IsInt, IsEmpty, IsNotEmpty,
    IsString, IsArray
} from 'class-validator';

export enum portionsTypes {
    FIRSTFLOWER,
    SECONDFLOWER,
    GROUND,
    BASEMENT,
    OTHER
}

export class Products {

    @IsNotEmpty()
    @IsString()
    streetNo: string;
    
    @IsNotEmpty()
    @IsString()
    houseNo: string;

    @IsNotEmpty()
    @IsInt()
    rentAmount: number;
    
    @IsNotEmpty()
    @IsInt()
    bedRooms: number;
    
    @IsNotEmpty()
    @IsInt()
    baths: number;

    @IsNotEmpty()
    @IsInt()
    area: number;
    
    @IsNotEmpty()
    @IsString()
    areaUnits: string;

    @IsNotEmpty()
    @IsString()
    portionType: portionsTypes;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsArray()
    location?: number;

    @IsArray()
    pics: string;
}