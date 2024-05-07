import { Injectable, NotFoundException } from '@nestjs/common';
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
    Repository<Doador>){

    }
  async create(createDoadorDto: CreateDoadorDto) {
    const doador = this.doadorRepository.create(createDoadorDto);
    // return 'This action adds a new doador';
    return await this.doadorRepository.save(doador);
  }

  async findAll() {
    // return `This action returns all doador`;
    return await this.doadorRepository.find({where: {situacao: 'ATIVO'}});
    // return await this.doadorRepository.createQueryBuilder('doador').
    // where('doador.situacao = :situacao', { situacao: 'ATIVO' }).
    // getMany();
  }

  async findOne(codigo: number) {
    // return `This action returns a #${id} doador`;
    return await this.doadorRepository.findOne({
    where: { codigo, situacao: 'ATIVO' }});
  }

  async update(id: number, updateDoadorDto: UpdateDoadorDto) {
    const doador = await this.findOne(id);
    if(!doador){
      throw new NotFoundException();
    }
    Object.assign(doador, updateDoadorDto);
    // return `This action updates a #${id} doador`;
    return await this.doadorRepository.save(doador);
  }

  async remove(id: number) {
    const doador = await this.findOne(id);
    if(!doador){
      throw new NotFoundException();
    }
    // return `This action removes a #${id} doador`;
    
     doador.situacao = 'INATIVO';
     return await this.doadorRepository.update(id, doador)

    // return await this.doadorRepository.remove(doador);
  }
}
