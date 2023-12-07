import { Injectable } from '@nestjs/common';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeesRepository } from '../reporitories/employees.repository';

@Injectable()
export class EmployeesService {
  constructor(private employeesRepository: EmployeesRepository) {}
  async updateEmployee(id: number, newEmployee: UpdateEmployeeDto) {
    return await this.employeesRepository.patchEmployee(id, newEmployee);
  }
}
