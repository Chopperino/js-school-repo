import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create.product.dto';
import { ProductsRepository } from '../reporitories/products.repository';

@Injectable()
export class ProductsService {
  constructor(private productsRepository: ProductsRepository) {}
  async createProduct(dto: CreateProductDto) {
    return await this.productsRepository.addProduct(dto);
  }
}
