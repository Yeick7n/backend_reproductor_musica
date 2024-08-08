/* eslint-disable prettier/prettier */
import { IsString } from "class-validator";

export class UpdateGeneroDto {
    @IsString()
    nombre?: string;
}