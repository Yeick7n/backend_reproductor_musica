/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Cancion } from "src/canciones/entities/cancion.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";

/* eslint-disable prettier/prettier */
export class CreatePlayListDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsNumber()
    @IsNotEmpty()
    usuario: Usuario

    @IsNumber()
    @IsOptional()
    canciones: Cancion[]
    
}