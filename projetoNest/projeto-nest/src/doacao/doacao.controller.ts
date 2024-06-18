import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DoacaoService } from './doacao.service';
import { CreateDoacaoDto } from './dto/create-doacao.dto';
import { UpdateDoacaoDto } from './dto/update-doacao.dto';

@Controller('doacao')
export class DoacaoController {
	constructor(private readonly doacaoService: DoacaoService) { }

	@Post()
	create(@Body() createDoacaoDto: CreateDoacaoDto) {
		return this.doacaoService.create(createDoacaoDto);
	}

	@Get()
	findAll() {
		return this.doacaoService.findAll();
	}

	// @Get(':id/doacoes') // a fazer
	// findAllDonations(@Param('id') doadorId: string) {
	// 	return this.doacaoService.findAllDonations(+doadorId);
	// }



	@Post('/query') // a fazer
	findAllFiltered(@Body() getDoacaoDto: CreateDoacaoDto) {
		return this.doacaoService.findAllUsingFilter(getDoacaoDto);
	}

	@Get(':id') // a fazer
	findOne(@Param('id') id: string) {
		return this.doacaoService.findOne(+id);
	}

	@Patch(':id') // a fazer
	update(@Param('id') id: string, @Body() updateDoacaoDto: UpdateDoacaoDto) {
		return this.doacaoService.update(+id, updateDoacaoDto);
	}

	@Delete(':id') // a fazer
	remove(@Param('id') id: string) {
		return this.doacaoService.remove(+id);
	}
}
