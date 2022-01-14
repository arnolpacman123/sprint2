import { Test, TestingModule } from '@nestjs/testing';
import { TipoPreguntaController } from './tipo-pregunta.controller';

describe('TipoPreguntaController', () => {
  let controller: TipoPreguntaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoPreguntaController],
    }).compile();

    controller = module.get<TipoPreguntaController>(TipoPreguntaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
