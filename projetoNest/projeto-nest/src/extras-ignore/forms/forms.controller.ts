import { Body, Controller, Post } from '@nestjs/common';
import { CreateFormsDto } from './dto/create-forms.dto';
import { FormsService } from './forms.service';
import { Forms } from './entities/forms.entity';

@Controller('forms')
export class FormsController {
    constructor(private formsService: FormsService){}

    @Post('/forms')
    createForms(@Body() createFormsDto: CreateFormsDto){
        const forms = this.formsService.createForms(createFormsDto);
        return forms;
    }
}
