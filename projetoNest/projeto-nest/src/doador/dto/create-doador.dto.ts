import { IsNotEmpty, IsString } from "class-validator";
import { RH } from "../enums/rh";
import { TipoSanguineo } from "../enums/tipoSanguineo";

export class CreateDoadorDto {

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
    tipoSanguineo: TipoSanguineo;

    @IsNotEmpty()
    rh: RH;

}
