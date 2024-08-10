/* eslint-disable prettier/prettier */
import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Autor } from "src/autores/entities/autor.entity";
import { Cancion } from "src/canciones/entities/cancion.entity";

export class CreateAlbumDto{

    @IsString()
    @IsNotEmpty()
    titulo: string;

    @IsDateString()
    @IsNotEmpty()
    fecha_lanzamiento: Date;

    @IsNumber()
    @IsNotEmpty()
    autor: Autor;

    @IsNumber()
    @IsOptional()
    canciones: Cancion[];
}
