import { Controller, Post, Body } from "@nestjs/common";
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
}