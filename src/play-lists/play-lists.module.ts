/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PlayListsService } from './play-lists.service';
import { PlayListsController } from './play-lists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayList } from './entities/play-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlayList])],
  controllers: [PlayListsController],
  providers: [PlayListsService],
})
export class PlayListsModule {}
