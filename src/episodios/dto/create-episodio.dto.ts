import { IsInt, IsString } from 'class-validator';

export class CreateEpisodioDto {
  @IsString()
  titulo: string;

  @IsInt()
  duracion: number;

  @IsInt()
  numeroCapitulo: number;

  @IsInt()
  serieId: number;
}