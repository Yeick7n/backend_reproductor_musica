/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PlayList {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;
}
