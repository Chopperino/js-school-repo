import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomerByIdPipe } from '../pipes/customer-by-id.pipe';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get(':customerId/orders')
  async findOrders(@Param('customerId', ParseIntPipe, CustomerByIdPipe) customerId: string) {
    return this.customersService.findOrders(+customerId);
  }
}
