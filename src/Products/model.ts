import {
    IsInt, IsEmpty, IsNotEmpty,
    IsString, IsArray,
    IsOptional
} from 'class-validator';

export enum portionTypes {
    FIRSTFLOWER='First Flower',
    SECONDFLOWER='Second Flower',
    GROUND='Ground',
    BASEMENT = 'Basement',
    FULL='Full',
    OTHER='Other'
}

export enum ProductTypes {
    HOUSE='House',
    OFFICE='Office',
    SHOP='Shop',
    ROOM='Room',

}

export enum AreaUnits {
    MARLA = 'Marla'
}

export class Products {

    @IsNotEmpty()
    @IsInt()
    streetNo: string;
    
    @IsNotEmpty()
    @IsString()
    city: string;
    
    @IsNotEmpty()
    @IsInt()
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
    areaUnits: AreaUnits;

    @IsNotEmpty()
    @IsString()
    portionType: portionTypes;

    @IsNotEmpty()
    @IsString()
    title: string;
    
    @IsNotEmpty()
    @IsString()
    productType: ProductTypes;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsOptional()
    @IsArray()
    location?: number;

    @IsOptional()
    @IsArray()
    pics?: string;

    @IsOptional()
    @IsString()
    userId?: string;
}