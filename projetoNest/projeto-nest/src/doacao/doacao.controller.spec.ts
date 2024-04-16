import { Test, TestingModule } from '@nestjs/testing';
import { DoacaoController } from './doacao.controller';
import { DoacaoService } from './doacao.service';

describe('DoacaoController', () => {
  let controller: DoacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoacaoController],
      providers: [DoacaoService],
    }).compile();

    controller = module.get<DoacaoController>(DoacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
