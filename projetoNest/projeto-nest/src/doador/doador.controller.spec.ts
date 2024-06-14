import { Test, TestingModule } from '@nestjs/testing';
import { DoadorController } from './doador.controller';
import { DoadorService } from './doador.service';

describe('DoadorController', () => {
	let controller: DoadorController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [DoadorController],
			providers: [DoadorService],
		}).compile();

		controller = module.get<DoadorController>(DoadorController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
