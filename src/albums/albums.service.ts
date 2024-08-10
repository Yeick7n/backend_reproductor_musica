/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Album } from './entities/album.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';

@Injectable()
export class AlbumsService {
    constructor(@InjectRepository(Album) private albumRepository: Repository<Album>) {}

    createAlbum(album: CreateAlbumDto) {
        const newAlbum = this.albumRepository.create(album)

        return this.albumRepository.save(newAlbum);
    }

    async getAlbum(id: number) {
        const albumFound = await this.albumRepository.findOne({
            where: {
                id,
            },
            relations: ['autor','canciones']
        });

        if(!albumFound) {
            return new HttpException('Album no encontrado', HttpStatus.NOT_FOUND)
        }

        return albumFound;
    }

    getAlbums() {
        return this.albumRepository.find({
            relations: ['autor','canciones']
        })
    }

    async updateAlbum(id: number, album: UpdateAlbumDto) {
        const albumFound = await this.albumRepository.find({
            where: {
                id,
            },
        });

        if(!albumFound) {
            return new HttpException('Album no encontrado', HttpStatus.NOT_FOUND)
        }

        return this.albumRepository.update(id, album)
    }

    async deleteAlbum(id: number) {
        const albumFound = await this.albumRepository.find({
            where: {
                id,
            },
        });

        if(!albumFound) {
            return new HttpException('Cancion no encontrada', HttpStatus.NOT_FOUND)
        }

        return this.albumRepository.delete(id);
    }
}
