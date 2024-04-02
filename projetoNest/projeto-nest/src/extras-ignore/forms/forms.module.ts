import { Module } from '@nestjs/common';
import { FormsController } from './forms.controller';
import { FormsService } from './forms.service';
import { CreateFormsDto } from './dto/create-forms.dto';

@Module({
  controllers: [FormsController],
  providers: [FormsService]
})
export class FormsModule {}
