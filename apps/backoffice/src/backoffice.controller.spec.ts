import { Test, TestingModule } from '@nestjs/testing';
import { BackofficeController } from './backoffice.controller';
import { BackofficeService } from './backoffice.service';

describe('BackofficeController', () => {
  let backofficeController: BackofficeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BackofficeController],
      providers: [BackofficeService],
    }).compile();

    backofficeController = app.get<BackofficeController>(BackofficeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(backofficeController.getHello()).toBe('Hello World!');
    });
  });
});
