import { Injectable } from "@nestjs/common";
import { Products } from "./model";



@Injectable()
export class ProductService{

    async create(product: Products){}
 }