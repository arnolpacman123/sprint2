import { Test, TestingModule } from '@nestjs/testing';
import { PreguntaController } from './pregunta.controller';

describe('PreguntaController', () => {
  let controller: PreguntaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PreguntaController],
    }).compile();

    controller = module.get<PreguntaController>(PreguntaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
