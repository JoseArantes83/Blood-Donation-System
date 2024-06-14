import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoadorModule } from './doador/doador.module';
import { DoacaoModule } from './doacao/doacao.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
	imports: [
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
				entities: [__dirname + '/**/*.entity{.ts,.js}'],
				//Nao usar synchronize em projetos reais 
				synchronize: true,
			})
		}),
		DoadorModule,
		DoacaoModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
