import { IsEnum, IsInt, IsNumber, IsString } from "class-validator";
import { Category } from '@prisma/client';

export class CreateProductDto {
  @IsString()
  name: string;
  @IsEnum(Category)
  category: Category;
  @IsInt()
  amount: number;
  @IsNumber()
  price: number;
}