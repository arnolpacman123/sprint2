import { Test, TestingModule } from '@nestjs/testing';
import { EncuestadorController } from './encuestador.controller';

describe('EncuestadorController', () => {
  let controller: EncuestadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EncuestadorController],
    }).compile();

    controller = module.get<EncuestadorController>(EncuestadorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
