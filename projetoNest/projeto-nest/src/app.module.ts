import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoadorModule } from './doador/doador.module';
import { DoacaoModule } from './doacao/doacao.module';

@Module({
  imports: [DoadorModule, DoacaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
