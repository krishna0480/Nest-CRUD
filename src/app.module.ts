import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';

@Module({
    imports: [MongooseModule.forRoot(
        'mongodb+srv://suriyakrish04:Krishna@123@nest-curd.btqop2u.mongodb.net/nextjs-curd?retryWrites=true&w=majority&appName=nest-curd'
    ), ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
    
    
export class AppModule {}
