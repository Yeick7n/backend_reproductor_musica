/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PlayListsService } from './play-lists.service';
import { CreatePlayListDto } from './dto/create-play-list.dto';
import { UpdatePlayListDto } from './dto/update-play-list.dto';

@Controller('play-lists')
export class PlayListsController {
  constructor(private readonly playListsService: PlayListsService) {}

  @Post('crear')
  createPlaylist(@Body() PlayListDto: CreatePlayListDto) {
    return this.playListsService.createPlaylist(PlayListDto);
  }

  @Get('obtener/all')
  getPlaylists() {
    return this.playListsService.getPlaylists();
  }

  @Get('obtener/:id')
  getPlaylist(@Param('id', ParseIntPipe) id: number) {
    return this.playListsService.getPlaylist(id);
  }

  @Patch('actualizar/:id')
  updatePlaylist(@Param('id', ParseIntPipe) id: number, @Body()playListDto: UpdatePlayListDto) {
    return this.playListsService.updatePlaylist(id, playListDto);
  }

  @Delete('eliminar/:id')
  deletePlaylist(@Param('id', ParseIntPipe) id: number) {
    return this.playListsService.deletePlaylist(id);
  }
}
