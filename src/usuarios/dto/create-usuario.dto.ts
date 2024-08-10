/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { PlayList } from 'src/play-lists/entities/play-list.entity';

export class CreateUsuarioDto{
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    usuario: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    contraseña: string;

    @IsNumber()
    @IsOptional()
    playlists: PlayList[];
}