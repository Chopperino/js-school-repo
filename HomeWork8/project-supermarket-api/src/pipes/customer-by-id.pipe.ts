import { Injectable, PipeTransform } from '@nestjs/common';
import { CustomersRepository } from '../reporitories/customers.repository';
import { InvalidEntityIdExcepiton } from '../exceptions/invalid-entity-id.excepiton';

@Injectable()
export class CustomerByIdPipe implements PipeTransform {
  constructor(private customerRepository: CustomersRepository) {}
  async transform(customerId: string){
    const customer = await this.customerRepository.getCustomer(+customerId);
    if (customer === null) {
      throw new InvalidEntityIdExcepiton('Customer');
    }
    return customerId;
  }
}