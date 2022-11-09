import { Injectable } from '@nestjs/common';

@Injectable()
export class BackofficeService {
  getHello(): string {
    return 'Hello World Backoffice!';
  }
}
