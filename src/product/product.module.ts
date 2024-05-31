import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductSchema } from './product.model';
import { ProductService } from './product.service';
import { ProductsController } from './product.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }])
    ],
    controllers: [ProductsController],
    providers:[ProductService],
})
    
export class ProductModule {}
