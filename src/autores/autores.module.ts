/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AutoresController } from './autores.controller';
import { AutoresService } from './autores.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autor } from './entities/autor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Autor])],
  controllers: [AutoresController],
  providers: [AutoresService],
})
export class AutoresModule {}
