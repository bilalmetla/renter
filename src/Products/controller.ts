import { Controller, Post } from "@nestjs/common";
import { ProductService } from "./service";


@Controller('products')
export class ProductController {

    constructor(private readonly productService: ProductService ){}


    @Post()
    async postProduct() {
        try {


            
        } catch (ex) {

            console.log(ex.stack)
            return {resultCode: 500}
        }
    }
}