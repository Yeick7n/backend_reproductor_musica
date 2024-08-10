/* eslint-disable prettier/prettier */
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Autor } from './entities/autor.entity';
import { Repository } from 'typeorm';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';

@Injectable()
export class AutoresService {
    constructor(@InjectRepository(Autor) private autoresRepository: Repository<Autor>) {}

    async createAutor(autorDto: CreateAutorDto): Promise<Autor> {

        const { nombre } = autorDto
        const autorFound = await this.autoresRepository.findOne({
            where: {
                nombre,
            },
        });

        if(autorFound) {
            throw new ConflictException('Nombre de autor ya existe')
        }

        const newAutor = this.autoresRepository.create(autorDto)
        return await this.autoresRepository.save(newAutor)
    }

    getAutores() {
        return this.autoresRepository.find({
            relations: ['albums','canciones']
        })
    }

    async getAutor(id: number) {
        const autorFound = await this.autoresRepository.findOne({
            where: {
                id,
            },
            relations: ['albums','canciones']
        });

        if(!autorFound) {
            throw new NotFoundException('Autor no encontrado')
        }

        return autorFound;
    }

    async updateAutor(id: number, AutorDto: UpdateAutorDto) {
        const autorFound = await this.autoresRepository.findOne({
            where: {
                id,
            },
        });

        if(!autorFound) {
            throw new NotFoundException('Autor no encontrado')
        }

        return this.autoresRepository.update(id, AutorDto);
    }

    async deleteAutor(id: number) {
        const autorFound = await this.autoresRepository.findOne({
            where: {
                id,
            },
        });

        if(!autorFound) {
            throw new NotFoundException('Autor no encontrado')
        }

        return this.autoresRepository.delete(id);
    }
}
