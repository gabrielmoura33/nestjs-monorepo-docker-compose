import { Controller, Get } from '@nestjs/common';
import { BackofficeService } from './backoffice.service';

@Controller()
export class BackofficeController {
  constructor(private readonly backofficeService: BackofficeService) {}

  @Get()
  getHello(): string {
    return this.backofficeService.getHello();
  }
}
