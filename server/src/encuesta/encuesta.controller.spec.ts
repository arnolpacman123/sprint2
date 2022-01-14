import { Test, TestingModule } from '@nestjs/testing';
import { EncuestaController } from './encuesta.controller';

describe('EncuestaController', () => {
  let controller: EncuestaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EncuestaController],
    }).compile();

    controller = module.get<EncuestaController>(EncuestaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
