import { IsString } from 'class-validator';

export class UpdateEmployeeDto {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsString()
  middleName: string;
  @IsString()
  position: string;
}