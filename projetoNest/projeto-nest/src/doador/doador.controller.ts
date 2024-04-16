import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DoadorService } from './doador.service';
import { CreateDoadorDto } from './dto/create-doador.dto';
import { UpdateDoadorDto } from './dto/update-doador.dto';

@Controller('doador')
export class DoadorController {
  constructor(private readonly doadorService: DoadorService) {}

  @Post()
  create(@Body() createDoadorDto: CreateDoadorDto) {
    return this.doadorService.create(createDoadorDto);
  }

  @Get()
  findAll() {
    return this.doadorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doadorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDoadorDto: UpdateDoadorDto) {
    return this.doadorService.update(+id, updateDoadorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doadorService.remove(+id);
  }
}
