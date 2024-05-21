import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDoadorDto } from './dto/create-doador.dto';
import { UpdateDoadorDto } from './dto/update-doador.dto';
import { Repository } from 'typeorm';
import { Doador } from './entities/doador.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { GetDoadorDto } from './dto/get-doador.dto';
import { isEmpty } from 'class-validator';

@Injectable()
export class DoadorService {
  constructor(
    @InjectRepository(Doador)
    private readonly doadorRepository:
      Repository<Doador>) {
  }
  async create(createDoadorDto: CreateDoadorDto) {
    const doador = this.doadorRepository.create(createDoadorDto);
    return await this.doadorRepository.save(doador);
  }

  async findAll() {
    return await this.doadorRepository.find({ where: { situacao: 'ATIVO' } });
  }

  async findAllUsingFilter(dto: GetDoadorDto) {

    const buildQuery = (body: Partial<GetDoadorDto>) => {
      let query = this.doadorRepository.createQueryBuilder('doador');
      query.where('doador.situacao = :situacao', { situacao: 'ATIVO' });

      //Para cada um dos parâmetros recebidos
      Object.keys(body).forEach(key => {
        if (!isEmpty(body[key])) {
          query.andWhere(`doador.${key} = :${key}`, { [key]: body[key] });
        } else {
          console.log(`Campo vazio ou indefinido: ${key}`);
        }
      });

      //Faz com a query não contenha a situação de cada doador
      query.select(['doador.codigo', 'doador.nome', 'doador.cpf', 'doador.contato', 'doador.tipoSanguineo', 'doador.rh']);

      return query;
    };

    return buildQuery(dto).getMany();
  }

  async findOne(codigo: number) {
    return await this.doadorRepository.findOne({
      where: { codigo, situacao: 'ATIVO' }
    });
  }

  async update(id: number, updateDoadorDto: UpdateDoadorDto) {

    const doador = await this.findOne(id);
    if (!doador) {
      throw new NotFoundException();
    }
    return await this.doadorRepository.update(id, updateDoadorDto);
  }

  async remove(id: number) {
    const doador = await this.findOne(id);
    if (!doador) {
      throw new NotFoundException();
    }

    doador.situacao = 'INATIVO';
    return await this.doadorRepository.update(id, doador)
  }
}