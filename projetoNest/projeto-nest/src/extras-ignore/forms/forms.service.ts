import { Injectable } from '@nestjs/common';
import { FormsModule } from './forms.module';
import { CreateFormsDto } from './dto/create-forms.dto';
import { Forms } from './entities/forms.entity';

@Injectable()
export class FormsService {

    createForms(createFormsDto: CreateFormsDto): Forms{
        const forms = new Forms();

        forms.conteudoTexto = createFormsDto.conteudoTexto;
        forms.inteiro = createFormsDto.inteiro;
        forms.booleano = createFormsDto.booleano;
        forms.opcaoSelect = createFormsDto.opcaoSelect
        forms.opcaoRadio = createFormsDto.opcaoRadio;

        return forms;
    }
}
