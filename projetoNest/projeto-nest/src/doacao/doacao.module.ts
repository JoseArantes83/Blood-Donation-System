import { Module } from '@nestjs/common';
import { DoacaoService } from './doacao.service';
import { DoacaoController } from './doacao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doacao } from 'src/doacao/entities/doacao.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Doacao])],
	controllers: [DoacaoController],
	providers: [DoacaoService],
})
export class DoacaoModule { }
