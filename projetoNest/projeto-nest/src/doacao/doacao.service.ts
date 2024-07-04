import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { CreateDoacaoDto } from './dto/create-doacao.dto';
import { UpdateDoacaoDto } from './dto/update-doacao.dto';
import { Doacao } from './entities/doacao.entity';
import { isEmpty } from 'class-validator';
import { GetDoacaoDto } from './dto/get-doacao.dto';
import { Doador } from 'src/doador/entities/doador.entity';
import { Logger } from '@nestjs/common';
import { GetDoacaoByDateDto } from './dto/get-doacao-by-date.dto';

@Injectable()
export class DoacaoService {
	constructor(
		@InjectRepository(Doacao)
		private doacaoRepository: Repository<Doacao>,
		@InjectRepository(Doador)
		private readonly doadorRepository: Repository<Doador>
	) { }

	private readonly logger = new Logger(DoacaoService.name);

	async create(createDoacaoDto: CreateDoacaoDto) {
		let { data, hora, volume, codigo_doador } = createDoacaoDto;
		let codigo;
		codigo = codigo_doador.toString();

		const doador = await this.doadorRepository.findOne({ where: { codigo, situacao: 'ATIVO' } });
		if (!doador) {
			throw new NotFoundException(`Doador with ID ${codigo_doador} not found.`);
		}

		const doacao = this.doacaoRepository.create({
			data,
			hora,
			volume,
			doador,
			situacao: 'ATIVO'
		});

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

	async findAllUsingFilter(dto: GetDoacaoDto) {

		const buildQuery = (body: Partial<GetDoacaoDto>) => {
			let query = this.doacaoRepository.createQueryBuilder('doacao');
			query.where('doacao.situacao = :situacao', { situacao: 'ATIVO' });

			//Para cada um dos parâmetros recebidos
			Object.keys(body).forEach(key => {
				if (!isEmpty(body[key])) {
					query.andWhere(`doacao.${key} = :${key}`, { [key]: body[key] });
				} else {
					console.log(`Campo vazio ou indefinido: ${key}`);
				}
			});

			//Faz com a query não contenha a situação de cada doação
			query.select(['doacao.codigo', 'doacao.data', 'doacao.hora', 'doacao.volume']);

			return query;
		};

		return buildQuery(dto).getMany();
	}

	async findAllDonationsByDonor(doadorId: number): Promise<Doacao[]> {
		return await this.doacaoRepository.find({
			where: { doador: { codigo: doadorId }, situacao: 'ATIVO' }, relations: ['doador']
		});
	}

	async findAllByDateRange(dto: GetDoacaoByDateDto): Promise<Doacao[]> {
		const { dataInicio, dataFim } = dto;
		this.logger.log(`Filtering doacoes from ${dataInicio} to ${dataFim}`);

		return this.doacaoRepository.find({
			where: {
				data: Between(new Date(dataInicio).toISOString().split('T')[0], new Date(dataFim).toISOString().split('T')[0]),
			},
			relations: ['doador'],
		});
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
