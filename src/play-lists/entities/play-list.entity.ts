/* eslint-disable prettier/prettier */
import { Cancion } from "src/canciones/entities/cancion.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PlayList {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @ManyToOne(() => Usuario, usuario => usuario.playlists)
    usuario: Usuario

    @ManyToMany(() => Cancion, (cancion) => cancion.playlists)
    canciones: Cancion[]
}
