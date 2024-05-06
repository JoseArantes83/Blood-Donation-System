import { PipeTransform, Injectable, ArgumentMetadata } from "@nestjs/common";
import { CreateDoadorDto } from "../dto/create-doador.dto";
import { TipoSanguineo } from "../enums/tipoSanguineo";
import { RH } from "../enums/rh";

@Injectable()
export class CreateDoadorPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): CreateDoadorDto {

        // console.log(value);
        const tipoSanguineo = TipoSanguineo[value.tipoSanguineo.toUpperCase()];
        // console.log(`converting from ${TipoSanguineo[value.tipoSanguineo.toUpperCase()]} to: ${tipoSanguineo}`);
        const rh = RH[value.rh.toUpperCase()];
        // console.log(`converting from ${RH[value.rh.toUpperCase()]} to: ${rh}`);

        const json = {
            codigo: value.codigo,
            nome: value.nome,
            cpf: value.cpf,
            contato: value.contato,
            tipoSanguineo: tipoSanguineo,
            rh: rh,
        };
        // console.log(json);

        return json;
        
    }
}

