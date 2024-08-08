/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Album {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    fecha_lanzamiento: Date;
}