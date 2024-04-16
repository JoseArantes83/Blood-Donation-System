import { Test, TestingModule } from '@nestjs/testing';
import { DoadorService } from './doador.service';

describe('DoadorService', () => {
  let service: DoadorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoadorService],
    }).compile();

    service = module.get<DoadorService>(DoadorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
