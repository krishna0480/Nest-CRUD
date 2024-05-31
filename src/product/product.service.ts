import { Injectable } from "@nestjs/common";
import { Product } from "./product.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ProductModule } from "./product.module";


@Injectable()
export class ProductService {
    private product: Product[] = [];

    constructor(@InjectModel('product') private readonly productModel: Model<ProductModule>) { }
    
    async insertProduct(title: string, desc: string, price: number) {
        const prodId = Math.random().toString();
        const newProduct = new this.productModel({title:title, description: desc,price:price,});
        const result = await newProduct.save();
        console.log(result)
        return 'proId'
    }

}