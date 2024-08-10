/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Cancion } from "src/canciones/entities/cancion.entity";

export class CreateGeneroDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsNumber()
    @IsOptional()
    canciones: Cancion[]
}