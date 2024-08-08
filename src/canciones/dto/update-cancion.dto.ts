/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from "class-validator";

export class UpdateCancionDto {

    @IsString()
    titulo?: string;

    @IsNumber()
    duracion?: number;

    @IsString()
    url_img?: string;
}