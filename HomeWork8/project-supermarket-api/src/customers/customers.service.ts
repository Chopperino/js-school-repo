import { Injectable } from '@nestjs/common';
import { GetOrderInterface } from './interfaces/get.order.interface';
import { CustomersRepository } from '../reporitories/customers.repository';

@Injectable()
export class CustomersService {
  constructor(private customersRepository: CustomersRepository) {}
  async findOrders(id: number) {
    const orders: GetOrderInterface[] = await this.customersRepository.getCustomerOrders(id);
    let totalCost: number;
    let grandTotalCost: number = 0;
    for (let i = 0; i < Object.keys(orders).length; i++) {
      totalCost = 0;
      const products = await this.customersRepository.getOrderProducts(orders[i].id);
      for (let j = 0; j < Object.keys(products).length; j++) {
        const product = await this.customersRepository.getProduct(products[j].productId);
        totalCost += product.Price * products[j].amount;
      }
      grandTotalCost += totalCost + orders[i].deliveryCost;
      orders[i].totalCost = totalCost + orders[i].deliveryCost;
    }
    return [orders, grandTotalCost];
  }
}
