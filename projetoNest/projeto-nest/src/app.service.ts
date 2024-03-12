import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getConfirmacaoRota(): string {
    return 'Rota executou com sucesso!';
  }

  getNumero(numero: number): string {
    return `Rota executou com sucesso recebendo o valor ${numero}!`;
  }

  getQuery(valor: number, quantidade: number): string{
    return `Rota executou com sucesso recebendo o valor ${valor} e quantidade ${quantidade}!`;
  }
}
