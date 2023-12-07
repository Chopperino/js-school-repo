import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidEntityIdExcepiton extends HttpException{
  constructor(entity: string) {
    super(`${entity} with such id not found`, HttpStatus.NOT_FOUND);
  }
}