/* eslint-disable prettier/prettier */
import { IsDate, IsDateString, IsNotEmpty, IsString } from "class-validator";

export class CreateAlbumDto{

    @IsString()
    @IsNotEmpty()
    titulo: string;

    @IsDateString()
    @IsNotEmpty()
    fecha_lanzamiento: Date;
}