import { IsNotEmpty, IsString } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateAutorDto {

    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    pais: string;
}