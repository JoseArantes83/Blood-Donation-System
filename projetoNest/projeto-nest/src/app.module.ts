import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoadorModule } from './doador/doador.module';
import { DoacaoModule } from './doacao/doacao.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Doacao } from './doacao/entities/doacao.entity';
// import { Doador } from './doador/entities/doador.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';

@Module({
  imports: [DoadorModule, DoacaoModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        // entities: [Doacao, Doador],
        entities: [join(process.cwd(), 'src/**/*.entity.js')],
        //Nao usar synchronize em projetos reais 
        synchronize: true,
      })
    })
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'admin',
    //   password: '123456',
    //   database: 'postgres',
    //   entities: [Doacao, Doador],
    //   synchronize: true,
    // })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
