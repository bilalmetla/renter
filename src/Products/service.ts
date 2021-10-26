import { Injectable } from "@nestjs/common";
import { Products } from "./model";
import { Nedb, Collections } from "../db/nedb";
import { Responses, Response } from "src/Responses";


@Injectable()
export class ProductService{


    constructor() {
       
    }
    

    async create(product: Products) {
        return await this.createProduct(product)
    }
   
    async update(product: Products, {productId}) {
        return await this.updateProduct(product, {productId})
    }
    async getList() {
        return await this.getListProduct()
    }
    async getById({id}) {
        return await this.getproductById(id)
    }

    private async createProduct(data) {
        const record = await global.db.insert(Collections.PRODUCTS, data);
        return new Responses().get(Response.OK, Response.MESSAGE, record)
    }
    
    private async updateProduct(data, {productId}) {
        const record = await global.db.update(Collections.PRODUCTS, data, {_id: productId});
        return new Responses().get(Response.OK, Response.MESSAGE, record)
    }
    
    private async getListProduct() {
        try {
            let record: Products[] = await global.db.find(Collections.PRODUCTS, {});
            return record;
            return new Responses().get(Response.OK, Response.MESSAGE, record)  
        } catch (ex) {
            throw ex
        }
        
    }
    
    private async getproductById(id) {
        const record = await global.db.findOne(Collections.PRODUCTS, {_id: id});
        return new Responses().get(Response.OK, Response.MESSAGE, record)
    }

 }