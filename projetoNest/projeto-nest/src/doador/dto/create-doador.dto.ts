import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { RH } from "../enums/rh";
import { TipoSanguineo } from "../enums/tipoSanguineo";

export class CreateDoadorDto {

    @IsNotEmpty()
    @IsNumber()
    codigo: Number;

    @IsNotEmpty()
    @IsString()
    nome: String;

    @IsNotEmpty()
    @IsString()
    cpf: String;

    @IsNotEmpty()
    @IsString()
    contato: String;

    @IsNotEmpty()
    @IsEnum(TipoSanguineo)
    tipoSanguineo: TipoSanguineo;

    @IsNotEmpty()
    @IsEnum(RH)
    rh: RH;

}
