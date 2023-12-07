import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class OrdersRepository{
  constructor(private prisma: PrismaService) {}
  async getOrder(id: number) {
    return this.prisma.order.findUnique({
      where: { id: id },
    });
  }
  async deleteOrderDB(id: number) {
    await this.prisma.productsInOrders.deleteMany({
      where: { orderId: id },
    });
    return this.prisma.order.delete({
      where: { id: id },
    });
  }
}