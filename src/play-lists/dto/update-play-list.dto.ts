/* eslint-disable prettier/prettier */
import { IsString } from "class-validator";

export class UpdatePlayListDto {
    @IsString()
    nombre?: string;
}
