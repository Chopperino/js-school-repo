import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { UpdateEmployeeDto } from '../employees/dto/update-employee.dto';

@Injectable()
export class EmployeesRepository {
  constructor(private prisma: PrismaService) {}
  async getEmployee(id: number) {
    return this.prisma.employee.findUnique({
      where: { id: id },
    });
  }
  async patchEmployee(id: number, newEmployee: UpdateEmployeeDto) {
    return this.prisma.employee.update({
      where: { id: id },
      data: {
        firstName: newEmployee.firstName,
        lastName: newEmployee.lastName,
        middleName: newEmployee.middleName,
        position: newEmployee.position,
      },
    });
  }
}