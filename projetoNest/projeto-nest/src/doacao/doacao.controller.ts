import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DoacaoService } from './doacao.service';
import { CreateDoacaoDto } from './dto/create-doacao.dto';
import { UpdateDoacaoDto } from './dto/update-doacao.dto';
import { GetDoacaoDto } from './dto/get-doacao.dto';

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

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.doacaoService.findOne(+id);
	}

	@Post('query')
	findAllFiltered(@Body() getDoacaoDto: GetDoacaoDto) {
		return this.doacaoService.findAllUsingFilter(getDoacaoDto);
	}

	@Get(':id/doacoes')
	findAllDonations(@Param('id') doadorId: string) {
		return this.doacaoService.findAllDonationsByDonor(+doadorId);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateDoacaoDto: UpdateDoacaoDto) {
		return this.doacaoService.update(+id, updateDoacaoDto);
	}

	@Delete(':id') // a fazer
	remove(@Param('id') id: string) {
		return this.doacaoService.remove(+id);
	}
}
