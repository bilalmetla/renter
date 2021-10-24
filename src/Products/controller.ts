import { Controller, Post, Body, Get, Put, Param } from "@nestjs/common";
import { ProductService } from "./service";
import { Products } from "./model";


@Controller('products')
export class ProductController {

    constructor(private readonly productService: ProductService ){}


    @Post()
    async postProduct(
        @Body() body: Products
    ) {
        try {

            console.log('request: ', body)
            const resp = await this.productService.create(body);
            console.log('response: ', resp)
            return resp;
            
        } catch (ex) {

            console.log(ex.stack)
            return {resultCode: 500}
        }
    }

    @Put(':productId')
    async putProduct(
        @Body() body: Products,
        @Param() params
    ) {
        try {

            console.log('request: ', body)
            const resp = await this.productService.update(body, params);
            console.log('response: ', resp)
            return resp;
            
        } catch (ex) {

            console.log(ex.stack)
            return {resultCode: 500}
        }
    }


    @Get()
    async getProduct() {
        try {
            const resp = await this.productService.getList();
            console.log('response: ', resp)
            return resp;
            
        } catch (ex) {

            console.log(ex.stack)
            return {resultCode: 500}
        }
    }

    @Get(':id')
    async getProductById(
        @Param() params
    ) {
        try {
            console.log('request: ', params)
        const resp = await this.productService.getById(params);
            console.log('response: ', resp)
            return resp;
            
        } catch (ex) {

            console.log(ex.stack)
            return {resultCode: 500}
        }
    }
}