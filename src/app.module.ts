/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CancionesModule } from './canciones/canciones.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AlbumsModule } from './albums/albums.module';
import { AutoresModule } from './autores/autores.module';
import { PlayListsModule } from './play-lists/play-lists.module';
import { GenerosModule } from './generos/generos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '1234567890',
      database: 'db_reproductor',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    CancionesModule,
    UsuariosModule,
    AlbumsModule,
    AutoresModule,
    PlayListsModule,
    GenerosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
