import { Injectable } from '@nestjs/common';
import { CreateDoadorDto } from './dto/create-doador.dto';
import { UpdateDoadorDto } from './dto/update-doador.dto';

@Injectable()
export class DoadorService {
  create(createDoadorDto: CreateDoadorDto) {
    return 'This action adds a new doador';
  }

  findAll() {
    return `This action returns all doador`;
  }

  findOne(id: number) {
    return `This action returns a #${id} doador`;
  }

  update(id: number, updateDoadorDto: UpdateDoadorDto) {
    return `This action updates a #${id} doador`;
  }

  remove(id: number) {
    return `This action removes a #${id} doador`;
  }
}
