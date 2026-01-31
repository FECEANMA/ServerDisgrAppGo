// src/estudiantes/dto/create-estudiante.dto.ts
import { IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, Min } from 'class-validator';

export class CreateEstudianteDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  apellido: string;

  @IsInt()
  @Min(5)
  edad: number;

  @IsInt()
  @IsPositive()
  docenteId: number;

  @IsInt()
  @IsPositive()
  aulaId: number;

  @IsInt()
  @IsPositive()
  nivelActualId: number;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @IsString()
  observacion?: string;
}
