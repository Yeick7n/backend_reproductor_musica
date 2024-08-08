/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlayListDto } from './dto/create-play-list.dto';
import { UpdatePlayListDto } from './dto/update-play-list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PlayList } from './entities/play-list.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlayListsService {

  constructor(@InjectRepository(PlayList) private playlistsRepository: Repository<PlayList>) {}

  async createPlaylist(playlist: CreatePlayListDto) {
    const newPlaylist =  this.playlistsRepository.create(playlist)
    return this.playlistsRepository.save(newPlaylist)
  }

  getPlaylists() {
    return this.playlistsRepository.find();
  }

  async getPlaylist(id: number) {
    const playlistFound = await this.playlistsRepository.findOne({
      where: {
        id,
      },
    });

    if(!playlistFound) {
      throw new NotFoundException('Playlist no encontrada')
    };

    return playlistFound;
  }

  async updatePlaylist(id: number, playlistDto: UpdatePlayListDto) {
    const playlistFound = await this.playlistsRepository.findOne({
      where: {
        id,
      },
    });

    if(!playlistFound) {
      throw new NotFoundException('Playlist no encontrada')
    };

    return this.playlistsRepository.update(id, playlistDto);
  }

  async deletePlaylist(id: number) {
    const playlistFound = await this.playlistsRepository.findOne({
      where: {
        id,
      },
    });

    if(!playlistFound) {
      throw new NotFoundException('Playlist no encontrada')
    };

    return this.playlistsRepository.delete(id);
  }
}
