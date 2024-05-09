import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { RH } from "../enums/rh";
import { TipoSanguineo } from "../enums/tipoSanguineo";

export class GetDoadorDto {

    codigo: Number;

    nome: String;

    cpf: String;

    contato: String;

    tiposSanguineo: TipoSanguineo;

    rh: RH;

}
