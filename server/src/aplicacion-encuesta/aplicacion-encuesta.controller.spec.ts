import { Test, TestingModule } from '@nestjs/testing';
import { AplicacionEncuestaController } from './aplicacion-encuesta.controller';

describe('AplicacionEncuestaController', () => {
  let controller: AplicacionEncuestaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AplicacionEncuestaController],
    }).compile();

    controller = module.get<AplicacionEncuestaController>(AplicacionEncuestaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
