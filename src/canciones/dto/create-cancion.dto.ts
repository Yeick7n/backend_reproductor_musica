/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

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
}