import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DoadorService } from './doador.service';
import { CreateDoadorDto } from './dto/create-doador.dto';
import { UpdateDoadorDto } from './dto/update-doador.dto';
import { CreateDoadorPipe } from './pipes/create-doador.pipe';
import { GetDoadorDto } from './dto/get-doador.dto';

@Controller('doador')
export class DoadorController {
    constructor(private readonly doadorService: DoadorService) { }

    @Post()
    create(@Body(new CreateDoadorPipe()) createDoadorDto: CreateDoadorDto) {
        return this.doadorService.create(createDoadorDto);
    }

    @Get()
    findAll() {
        return this.doadorService.findAll();
    }

    @Post('/query')
    findAllFiltered(@Body() getDoadorDto: GetDoadorDto) {
        return this.doadorService.findAllUsingFilter(getDoadorDto);
    }

    @Post(':id/doacoes')
    findAllDonationsByDoadorCodigo(@Param('id') doadorId: number) {
        return this.doadorService.findAllDonationsByDoadorCodigo(doadorId);
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
