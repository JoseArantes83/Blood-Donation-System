import { HttpCode, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDoadorDto } from './dto/create-doador.dto';
import { UpdateDoadorDto } from './dto/update-doador.dto';
import { Repository } from 'typeorm';
import { Doador } from './entities/doador.entity';
import { InjectRepository } from '@nestjs/typeorm';

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

  async findOne(codigo: number) {
    return await this.doadorRepository.findOne({
      where: { codigo, situacao: 'ATIVO' }
    });
  }

  //NÃO É CERTO USAR O SAVE POIS MEXE NO CODIGO DENTRO DO BANCO DE DADOS
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
