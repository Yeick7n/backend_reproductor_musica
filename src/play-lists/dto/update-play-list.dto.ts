/* eslint-disable prettier/prettier */
import { IsNumber, IsOptional, IsString } from "class-validator";
import { Cancion } from "src/canciones/entities/cancion.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";

export class UpdatePlayListDto {
    @IsString()
    @IsOptional()
    nombre?: string;

    @IsNumber()
    @IsOptional()
    usuario?: Usuario

    @IsNumber()
    @IsOptional()
    canciones?: Cancion[]
}
