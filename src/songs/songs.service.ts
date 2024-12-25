import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-songs.dto';

@Injectable()
export class SongsService {
  private readonly songList = [];

  create(createSongDto: CreateSongDto) {
    this.songList.push(createSongDto);
    return this.songList;
  }

  findAll() {
    throw new Error('Apenas testando um coisa');
    return this.songList;
  }
}
