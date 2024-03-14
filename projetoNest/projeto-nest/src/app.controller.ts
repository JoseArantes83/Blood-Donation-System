import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('Rota http://localhost:3000 acessada.');
    return this.appService.getHello();
  }

  @Get('teste1')
  getConfirmacaoRota(): string {
    console.log('Rota http://localhost:3000/teste1 acessada.');
    return this.appService.getConfirmacaoRota();
  }

  @Get('teste2/:num')
  getNumero(@Param('num') numero: number): string {
    console.log(`Rota http://localhost:3000/teste2/${numero} acessada.`);
    const res = this.appService.getNumero(numero);
    return res;
  }

  @Get('teste3')
  getQuery(
    @Query('valor') valor: number,
    @Query('quantidade') quantidade: number,
  ): string {
    console.log(
      `Rota http://localhost:3000/teste3?valor=${valor}&quantidade=${quantidade} acessada.`,
    );
    const res = this.appService.getQuery(valor, quantidade);
    return res;
  }

  @Post('formulario')
  async postFormulario(@Body() algo: any) {
    console.log(algo);
    return { message: 'dados recebidos' };
  }
}
