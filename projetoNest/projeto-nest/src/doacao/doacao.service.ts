import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDoacaoDto } from './dto/create-doacao.dto';
import { UpdateDoacaoDto } from './dto/update-doacao.dto';
import { Doacao } from './entities/doacao.entity';

@Injectable()
export class DoacaoService {
	constructor(
		@InjectRepository(Doacao)
		private doacaoRepository: Repository<Doacao>) { }

	async create(createDoacaoDto: CreateDoacaoDto) {
		const doacao = this.doacaoRepository.create(createDoacaoDto);
		return await this.doacaoRepository.save(doacao);
	}

	async findAll() {
		return await this.doacaoRepository.find({ where: { situacao: 'ATIVO' } });
	}

	findOne(id: number) {
		return `This action returns a #${id} doacao`;
	}

	update(id: number, updateDoacaoDto: UpdateDoacaoDto) {
		return `This action updates a #${id} doacao`;
	}

	remove(id: number) {
		return `This action removes a #${id} doacao`;
	}
}
