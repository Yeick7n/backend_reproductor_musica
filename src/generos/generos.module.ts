/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GenerosController } from './generos.controller';
import { GenerosService } from './generos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genero } from './entities/genero.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Genero])],
  controllers: [GenerosController],
  providers: [GenerosService],
})
export class GenerosModule {}
