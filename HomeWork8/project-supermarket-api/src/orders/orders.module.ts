import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { PrismaService } from '../prisma.service';
import { OrdersRepository } from '../reporitories/orders.repository';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, PrismaService, OrdersRepository],
})
export class OrdersModule {}
