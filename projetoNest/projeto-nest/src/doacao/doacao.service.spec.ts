import { Test, TestingModule } from '@nestjs/testing';
import { DoacaoService } from './doacao.service';

describe('DoacaoService', () => {
  let service: DoacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoacaoService],
    }).compile();

    service = module.get<DoacaoService>(DoacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
