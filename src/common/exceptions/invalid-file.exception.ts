import { UnprocessableEntityException } from '@nestjs/common';

export class InvalidFileException extends UnprocessableEntityException {
  constructor(message: string) {
    super(message);
  }
}
