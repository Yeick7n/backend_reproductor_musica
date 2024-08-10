/* eslint-disable prettier/prettier */
import { Cancion } from "src/canciones/entities/cancion.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Genero {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @OneToMany(() => Cancion, cancion => cancion.genero)
    canciones: Cancion[]
}