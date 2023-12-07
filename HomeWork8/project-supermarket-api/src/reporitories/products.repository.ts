import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateProductDto } from '../products/dto/create.product.dto';

@Injectable()
export class ProductsRepository{
  constructor(private prisma: PrismaService) {}
  async addProduct(dto: CreateProductDto) {
    return this.prisma.product.create({
      data: {
        name: dto.name,
        category: dto.category,
        amount: dto.amount,
        Price: dto.price,
      },
    });
  }
}