import { Body, Controller, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeByIdPipe } from '../pipes/employee-by-id.pipe';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}
  @Patch(':employeeId')
  async updateEmployee(
    @Param('employeeId', ParseIntPipe, EmployeeByIdPipe) id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeesService.updateEmployee(+id, updateEmployeeDto);
  }
}
