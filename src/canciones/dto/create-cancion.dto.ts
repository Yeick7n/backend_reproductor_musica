/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Album } from "src/albums/entities/album.entity";
import { Autor } from "src/autores/entities/autor.entity";
import { Genero } from "src/generos/entities/genero.entity";
import { PlayList } from "src/play-lists/entities/play-list.entity";

export class CreateCancionDto {
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @IsNumber()
    @IsNotEmpty()
    duracion: number;

    @IsString()
    @IsNotEmpty()
    url_img: string;

    @IsNumber()
    @IsOptional()
    album: Album

    @IsNumber()
    @IsNotEmpty()
    autor: Autor

    @IsNumber()
    @IsNotEmpty()
    genero: Genero

    @IsNumber()
    @IsOptional()
    playlists: PlayList[]
    
}

