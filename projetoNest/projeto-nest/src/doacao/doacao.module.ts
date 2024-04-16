import { Module } from '@nestjs/common';
import { DoacaoService } from './doacao.service';
import { DoacaoController } from './doacao.controller';

@Module({
  controllers: [DoacaoController],
  providers: [DoacaoService],
})
export class DoacaoModule {}
