import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { PrismaService } from '../prisma.service';
import { CustomersRepository } from "../reporitories/customers.repository";

@Module({
  controllers: [CustomersController],
  providers: [CustomersService, PrismaService, CustomersRepository],
})
export class CustomersModule {}
