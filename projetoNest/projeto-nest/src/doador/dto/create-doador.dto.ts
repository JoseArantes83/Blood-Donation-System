import { IsNotEmpty, IsString } from "class-validator";
import { RH } from "../enums/rh";
import { TipoSanguineo } from "../enums/tipoSanguineo";

export class CreateDoadorDto {

    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsString()
    cpf: string;

    @IsNotEmpty()
    @IsString()
    contato: string;

    @IsNotEmpty()
    tipoSanguineo: TipoSanguineo;

    @IsNotEmpty()
    rh: RH;

    tipoRhCorretos: boolean;
}
