import { Module } from '@nestjs/common';
import { DoacaoService } from './doacao.service';
import { DoacaoController } from './doacao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doacao } from 'src/doacao/entities/doacao.entity';
import { Doador } from 'src/doador/entities/doador.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Doacao]), TypeOrmModule.forFeature([Doador])],
	controllers: [DoacaoController],
	providers: [DoacaoService],
})
export class DoacaoModule { }
