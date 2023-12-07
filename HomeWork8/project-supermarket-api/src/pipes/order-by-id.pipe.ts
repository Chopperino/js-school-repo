import { Injectable, PipeTransform } from '@nestjs/common';
import { InvalidEntityIdExcepiton } from '../exceptions/invalid-entity-id.excepiton';
import { OrdersRepository } from '../reporitories/orders.repository';

@Injectable()
export class OrderByIdPipe implements PipeTransform {
  constructor(private orderRepository: OrdersRepository) {}
  async transform(orderId: string){
    const order = await this.orderRepository.getOrder(+orderId);
    if (order === null) {
      throw new InvalidEntityIdExcepiton('Order');
    }
    return orderId;
  }
}