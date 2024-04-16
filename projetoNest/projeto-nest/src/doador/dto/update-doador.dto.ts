import { PartialType } from '@nestjs/mapped-types';
import { CreateDoadorDto } from './create-doador.dto';

export class UpdateDoadorDto extends PartialType(CreateDoadorDto) {}
