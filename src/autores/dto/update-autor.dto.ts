/* eslint-disable prettier/prettier */
import { IsNumber, IsOptional, IsString } from "class-validator";
import { Album } from "src/albums/entities/album.entity";
import { Cancion } from "src/canciones/entities/cancion.entity";

export class UpdateAutorDto {

    @IsString()
    @IsOptional()
    nombre?: string;

    @IsNumber()
    @IsOptional()
    pais?: string;

    @IsNumber()
    @IsOptional()
    albums?: Album[];

    @IsNumber()
    @IsOptional()
    canciones: Cancion[];
}