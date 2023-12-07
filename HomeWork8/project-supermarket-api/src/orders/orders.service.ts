import { Injectable } from '@nestjs/common';
import { OrdersRepository } from '../reporitories/orders.repository';

@Injectable()
export class OrdersService {
  constructor(private ordersRepository: OrdersRepository) {}
  async deleteOrder(id: number) {
    return await this.ordersRepository.deleteOrderDB(id);
  }
}
