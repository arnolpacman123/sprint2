import { Test, TestingModule } from '@nestjs/testing';
import { RespuestaController } from './respuesta.controller';

describe('RespuestaController', () => {
  let controller: RespuestaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RespuestaController],
    }).compile();

    controller = module.get<RespuestaController>(RespuestaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
