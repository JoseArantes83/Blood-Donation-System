import { RH } from "../enums/rh";
import { TipoSanguineo } from "../enums/tipoSanguineo";

export class GetDoadorDto {

    codigo: Number;

    nome: String;

    cpf: String;

    contato: String;

    tipoSanguineo: TipoSanguineo;

    rh: RH;

}
