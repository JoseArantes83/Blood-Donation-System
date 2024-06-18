import { IsDateString, IsNotEmpty } from "class-validator";

export class CreateDoacaoDto {
    @IsNotEmpty()
    @IsDateString({}, { message: 'A data deve estar no formato YYYY-MM-DD' })
    data: string;

    @IsNotEmpty()
    @IsDateString({}, { message: 'A hora deve estar no formato HH:mm' })
    hora: string;

    @IsNotEmpty()
    volume: number;
}
