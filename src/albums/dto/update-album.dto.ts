/* eslint-disable prettier/prettier */
import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";
import { Autor } from "src/autores/entities/autor.entity";
import { Cancion } from "src/canciones/entities/cancion.entity";

export class UpdateAlbumDto {

    @IsString()
    @IsOptional()
    titulo?: string;

    @IsDate()
    @IsOptional()
    fecha_lanzamiento?: Date;

    @IsNumber()
    @IsOptional()
    autor?: Autor

    @IsNumber()
    @IsOptional()
    canciones?: Cancion[]
}