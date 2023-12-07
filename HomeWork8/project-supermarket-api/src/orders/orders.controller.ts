import { Controller, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderByIdPipe } from '../pipes/order-by-id.pipe';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  @Delete(':orderId')
  async deleteOrder(@Param('orderId', ParseIntPipe, OrderByIdPipe) orderId: string) {
    return this.ordersService.deleteOrder(+orderId);
  }
}
