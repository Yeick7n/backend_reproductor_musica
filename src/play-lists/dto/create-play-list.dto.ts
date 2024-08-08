import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Usuario } from "src/usuarios/entities/usuario.entity";

/* eslint-disable prettier/prettier */
export class CreatePlayListDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsNumber()
    usuario: Usuario
}