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
        return this.createProduct(product)
    }

    private async createProduct(data) {
        const record = await this.db.insert(Collections.PRODUCTS, data);
        return new Responses().get(Response.OK, Response.MESSAGE, record)
    }

 }