/* eslint-disable prettier/prettier */
import { IsDate, IsString } from "class-validator";

export class UpdateAlbumDto {

    @IsString()
    titulo: string;

    @IsDate()
    fecha_lanzamiento: Date;
}