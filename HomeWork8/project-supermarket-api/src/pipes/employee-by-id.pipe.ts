import { Injectable, PipeTransform } from '@nestjs/common';
import { InvalidEntityIdExcepiton } from '../exceptions/invalid-entity-id.excepiton';
import { EmployeesRepository } from '../reporitories/employees.repository';

@Injectable()
export class EmployeeByIdPipe implements PipeTransform {
  constructor(private employeeRepository: EmployeesRepository) {}
  async transform(employeeId: string){
    const employee = await this.employeeRepository.getEmployee(+employeeId);
    if (employee === null) {
      throw new InvalidEntityIdExcepiton('Employee');
    }
    return employeeId;
  }
}