import { Injectable } from "@nestjs/common";
import { Products } from "./model";
import { Nedb, Collections } from "../db/nedb";
import { Responses, Response } from "src/Responses";


@Injectable()
export class ProductService{

    private db: Nedb;

    constructor() {
        this.db = new Nedb()
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
        const record = await this.db.insert(Collections.PRODUCTS, data);
        return new Responses().get(Response.OK, Response.MESSAGE, record)
    }
    
    private async updateProduct(data, {productId}) {
        const record = await this.db.update(Collections.PRODUCTS, data, {_id: productId});
        return new Responses().get(Response.OK, Response.MESSAGE, record)
    }
    
    private async getListProduct() {
        const record = await this.db.find(Collections.PRODUCTS, {});
        return new Responses().get(Response.OK, Response.MESSAGE, record)
    }
    
    private async getproductById(id) {
        const record = await this.db.findOne(Collections.PRODUCTS, {_id: id});
        return new Responses().get(Response.OK, Response.MESSAGE, record)
    }

 }