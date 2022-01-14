import { Test, TestingModule } from '@nestjs/testing';
import { EncuestadorService } from './encuestador.service';

describe('EncuestadorService', () => {
  let service: EncuestadorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EncuestadorService],
    }).compile();

    service = module.get<EncuestadorService>(EncuestadorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
