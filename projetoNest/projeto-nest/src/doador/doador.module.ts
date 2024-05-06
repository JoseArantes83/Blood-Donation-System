import { Module } from '@nestjs/common';
import { DoadorService } from './doador.service';
import { DoadorController } from './doador.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doador } from './entities/doador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Doador])],
  controllers: [DoadorController],
  providers: [DoadorService],
})
export class DoadorModule {}
