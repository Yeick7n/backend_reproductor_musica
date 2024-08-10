/* eslint-disable prettier/prettier */
import { Autor } from "src/autores/entities/autor.entity";
import { Cancion } from "src/canciones/entities/cancion.entity";
import { Column, Entity, ManyToOne, OneToMany , PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Album {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    fecha_lanzamiento: Date;

    @ManyToOne(() => Autor, autor => autor.albums)
    autor: Autor

    @OneToMany(() => Cancion, cancion => cancion.album)
    canciones: Cancion[]
}