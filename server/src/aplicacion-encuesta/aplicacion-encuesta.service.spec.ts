import { Test, TestingModule } from '@nestjs/testing';
import { AplicacionEncuestaService } from './aplicacion-encuesta.service';

describe('AplicacionEncuestaService', () => {
  let service: AplicacionEncuestaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AplicacionEncuestaService],
    }).compile();

    service = module.get<AplicacionEncuestaService>(AplicacionEncuestaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
