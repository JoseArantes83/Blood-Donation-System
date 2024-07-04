import { IsDateString, IsNotEmpty } from 'class-validator';

export class GetDoacaoByDateDto {
    @IsNotEmpty()
    @IsDateString({}, { message: 'A dataInicio deve estar no formato YYYY-MM-DD' })
    dataInicio: string;

    @IsNotEmpty()
    @IsDateString({}, { message: 'A dataFim deve estar no formato YYYY-MM-DD' })
    dataFim: string;
}