/* eslint-disable prettier/prettier */
import { IsNumber, IsOptional, IsString } from "class-validator";
import { Cancion } from "src/canciones/entities/cancion.entity";

export class UpdateGeneroDto {
    @IsString()
    @IsOptional()
    nombre?: string;

    @IsNumber()
    @IsOptional()
    canciones?: Cancion[]
}