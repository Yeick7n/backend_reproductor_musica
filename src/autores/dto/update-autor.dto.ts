import { IsNumber, IsString } from "class-validator";

/* eslint-disable prettier/prettier */
export class UpdateAutorDto {

    @IsString()
    nombre?: string;

    @IsNumber()
    pais?: string;
}