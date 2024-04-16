import { Injectable } from '@nestjs/common';
import { CreateDoacaoDto } from './dto/create-doacao.dto';
import { UpdateDoacaoDto } from './dto/update-doacao.dto';

@Injectable()
export class DoacaoService {
  create(createDoacaoDto: CreateDoacaoDto) {
    return 'This action adds a new doacao';
  }

  findAll() {
    return `This action returns all doacao`;
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
