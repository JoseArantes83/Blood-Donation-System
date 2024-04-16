import { PartialType } from '@nestjs/mapped-types';
import { CreateDoacaoDto } from './create-doacao.dto';

export class UpdateDoacaoDto extends PartialType(CreateDoacaoDto) {}
