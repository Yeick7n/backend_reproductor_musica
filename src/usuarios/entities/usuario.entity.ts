/* eslint-disable prettier/prettier */
import { PlayList } from "src/play-lists/entities/play-list.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column({ unique: true })
    usuario: string;

    @Column()
    email: string;

    @Column()
    contraseña: string;

    @OneToMany(() => PlayList, playlist => playlist.usuario)
    playlists: PlayList[];
}