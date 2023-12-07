import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CustomersRepository {
  constructor(private prisma: PrismaService) {}
  async getCustomerOrders(id: number) {
    return this.prisma.order.findMany({
      where: { customerId: Number(id) },
    });
  }
  async getCustomer(id: number) {
    return this.prisma.customer.findUnique({
      where: { id: id },
    });
  }
  async getOrderProducts(id: number) {
    return this.prisma.productsInOrders.findMany({
      where: { orderId: Number(id) },
    });
  }
  async getProduct(id: number) {
    return this.prisma.product.findFirst({
      where: { id: id },
    });
  }
}