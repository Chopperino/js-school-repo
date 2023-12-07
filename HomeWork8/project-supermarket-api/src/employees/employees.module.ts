import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { PrismaService } from '../prisma.service';
import { EmployeesRepository } from '../reporitories/employees.repository';

@Module({
  controllers: [EmployeesController],
  providers: [EmployeesService, EmployeesRepository, PrismaService],
})
export class EmployeesModule {}
