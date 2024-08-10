/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Album } from "src/albums/entities/album.entity";
import { Cancion } from "src/canciones/entities/cancion.entity";

export class CreateAutorDto {

    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    pais: string;

    @IsNumber()
    @IsOptional()
    albums: Album[]

    @IsNumber()
    @IsOptional()
    canciones: Cancion[]
}