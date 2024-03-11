import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() { // mesmo que inicialização
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
