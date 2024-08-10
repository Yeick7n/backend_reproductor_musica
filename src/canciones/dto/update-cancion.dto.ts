/* eslint-disable prettier/prettier */
import { IsNumber, IsOptional, IsString } from "class-validator";
import { Album } from "src/albums/entities/album.entity";
import { Autor } from "src/autores/entities/autor.entity";
import { Genero } from "src/generos/entities/genero.entity";
import { PlayList } from "src/play-lists/entities/play-list.entity";

export class UpdateCancionDto {
    @IsString()
    @IsOptional()
    titulo?: string;

    @IsNumber()
    @IsOptional()
    duracion?: number;

    @IsString()
    @IsOptional()
    url_img?: string;

    @IsNumber()
    @IsOptional()
    album?: Album

    @IsNumber()
    @IsOptional()
    autor?: Autor

    @IsNumber()
    @IsOptional()
    genero?: Genero

    @IsNumber()
    @IsOptional()
    playlists?: PlayList[]
}