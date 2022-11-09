import { Module } from '@nestjs/common';
import { BackofficeController } from './backoffice.controller';
import { BackofficeService } from './backoffice.service';

@Module({
  imports: [],
  controllers: [BackofficeController],
  providers: [BackofficeService],
})
export class BackofficeModule {}
