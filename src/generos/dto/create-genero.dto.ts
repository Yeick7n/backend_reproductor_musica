/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";

export class CreateGeneroDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;
}