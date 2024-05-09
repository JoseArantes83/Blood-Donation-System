import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { CreateDoadorDto } from "../dto/create-doador.dto";
import { TipoSanguineo } from "../enums/tipoSanguineo";
import { RH } from "../enums/rh";

@Injectable()
export class CreateDoadorPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): CreateDoadorDto {

        const tipoSanguineo = TipoSanguineo[value.tipoSanguineo.toUpperCase()];
        const rh = RH[value.rh.toUpperCase()];

        if (!tipoSanguineo || !rh) {

            throw new BadRequestException(`Valor inválido para TipoSanguineo ou RH: ${value.tipoSanguineo}, ${value.rh}`);
            // Valores esperados para tipo sanguíneo: ${TipoSanguineo.A}, ${TipoSanguineo.AB}, ${TipoSanguineo.B}, ${TipoSanguineo.O};
            // Valores esperados para RH: ${RH.POSITIVO}, ${RH.NEGATIVO};`);
        }

        const object = {
            codigo: value.codigo,
            nome: value.nome,
            cpf: value.cpf,
            contato: value.contato,
            tipoSanguineo: tipoSanguineo,
            rh: rh,
        };

        return object;
    }
}
