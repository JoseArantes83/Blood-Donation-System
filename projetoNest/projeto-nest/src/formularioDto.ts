import {
  IsInt,
  IsNotEmpty,
  MinLength,
  MaxLength,
  Min,
  Max,
} from 'class-validator';

export class FormularioDto {
  @MinLength(2)
  @MaxLength(255)
  @IsNotEmpty()
  nome: string;

  @Min(0)
  @Max(1000)
  @IsNotEmpty()
  @IsInt()
  idade: number;

  @IsNotEmpty()
  casado: boolean;

  @IsNotEmpty()
  areaAtuacao: string;

  @IsNotEmpty()
  sexo: string;
}
