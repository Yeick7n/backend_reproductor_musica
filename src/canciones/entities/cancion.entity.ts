/* eslint-disable prettier/prettier */
import { Album } from "src/albums/entities/album.entity";
import { Autor } from "src/autores/entities/autor.entity";
import { Genero } from "src/generos/entities/genero.entity";
import { PlayList } from "src/play-lists/entities/play-list.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cancion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    duracion: number;
    
    @Column()
    url_img: string;

    @ManyToOne(() => Album, album => album.canciones)
    album: Album

    @ManyToOne(() => Autor, autor => autor.canciones)
    autor: Autor

    @ManyToOne(() => Genero, genero => genero.canciones)
    genero: Genero

    @ManyToMany(() => PlayList, (playlist) => playlist.canciones, { cascade: true })
    @JoinTable({
        name: 'cancion_playlist',
        joinColumn: {
            name: 'cancion_id',
            // referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'play-list_id',
            // referencedColumnName: 'id',
        },
    })
    playlists: PlayList[]

}