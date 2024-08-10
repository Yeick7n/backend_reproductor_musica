/* eslint-disable prettier/prettier */
import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";
import { PlayList } from "src/play-lists/entities/play-list.entity";

export class UpdateUsuarioDto{
    @IsString()
    @IsOptional()
    nombre?: string;

    @IsString()
    @IsOptional()
    usuario?: string;

    @IsEmail()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    contraseña?: string;

    @IsNumber()
    @IsOptional()
    playlists?: PlayList[];
}