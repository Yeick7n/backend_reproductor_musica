/* eslint-disable prettier/prettier */
import { Album } from "src/albums/entities/album.entity";
import { Cancion } from "src/canciones/entities/cancion.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Autor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true})
    nombre: string;

    @Column()
    pais: string;

    @OneToMany(() => Album, album => album.autor)
    albums: Album[]

    @OneToMany(() => Cancion, cancion => cancion.autor)
    canciones: Cancion[]
}
