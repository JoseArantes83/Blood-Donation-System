import { IsDateString, IsNumber, IsOptional, IsString } from "class-validator";
import { IsTimeString } from "./time-string.validator";

export class GetDoacaoDto {
    codigo: Number;
    data: String;
    hora: String;
    volume: Number;
    codigo_doador: Number;

    // @IsOptional()
    // @IsDateString({}, { message: 'A data deve estar no formato YYYY-MM-DD' })
    // data?: string;

    // @IsOptional()
    // @IsString({ message: 'A hora deve estar no formato HH:mm' })
    // hora?: string;

    // @IsOptional()
    // @IsNumber({}, { message: 'O volume deve ser um número' })
    // volume?: number;

    // @IsOptional()
    // @IsNumber({}, { message: 'O código do doador deve ser um número' })
    // codigo_doador?: number;
}
