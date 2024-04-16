import { Module } from '@nestjs/common';
import { DoadorService } from './doador.service';
import { DoadorController } from './doador.controller';

@Module({
  controllers: [DoadorController],
  providers: [DoadorService],
})
export class DoadorModule {}
