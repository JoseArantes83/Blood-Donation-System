import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDoacaoDto } from './dto/create-doacao.dto';
import { UpdateDoacaoDto } from './dto/update-doacao.dto';
import { Doacao } from './entities/doacao.entity';
import { GetDoadorDto } from 'src/doador/dto/get-doador.dto';
import { isEmpty } from 'class-validator';

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

	async findOne(codigo: number) {
		return await this.doacaoRepository.findOne({
			where: { codigo, situacao: 'ATIVO' }
		});
	}

	// async findAllDonations(doadorId: number) {
	// 	return await this.doacaoRepository.find({ where: { situacao: 'ATIVO' } });
	// }

	async findAllUsingFilter(dto: CreateDoacaoDto) {

		const buildQuery = (body: Partial<CreateDoacaoDto>) => {
			let query = this.doacaoRepository.createQueryBuilder('doacao');
			query.where('doacao.situacao = :situacao', { situacao: 'ATIVO' });

			//Para cada um dos parâmetros recebidos
			Object.keys(body).forEach(key => {
				if (!isEmpty(body[key])) {
					query.andWhere(`doacao.${key} = :${key}`, { [key]: body[key] });
				} else {
					// console.log(`Campo vazio ou indefinido: ${key}`);
				}
			});

			//Faz com a query não contenha a situação de cada doação
			query.select(['doacao.codigo', 'doacao.data', 'doacao.hora', 'doacao.volume']);

			return query;
		};

		return buildQuery(dto).getMany();
	}

	async update(id: number, updateDoacaoDto: UpdateDoacaoDto) {

		const doacao = await this.findOne(id);
		if (!doacao) {
			throw new NotFoundException();
		}
		return await this.doacaoRepository.update(id, updateDoacaoDto);
	}

	async remove(id: number) {
		const doacao = await this.findOne(id);
		if (!doacao) {
			throw new NotFoundException();
		}

		doacao.situacao = 'INATIVO';
		return await this.doacaoRepository.update(id, doacao);
	}
}
