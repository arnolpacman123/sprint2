import { Test, TestingModule } from '@nestjs/testing';
import { OpcionController } from './opcion.controller';

describe('OpcionController', () => {
  let controller: OpcionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpcionController],
    }).compile();

    controller = module.get<OpcionController>(OpcionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
