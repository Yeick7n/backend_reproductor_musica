import { IsEmail, IsString } from "class-validator";

/* eslint-disable prettier/prettier */
export class UpdateUsuarioDto{
    @IsString()
    nombre?: string;

    @IsString()
    usuario?: string;

    @IsEmail()
    email?: string;

    @IsString()
    contraseña?: string;
}