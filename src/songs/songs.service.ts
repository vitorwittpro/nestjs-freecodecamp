import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private readonly songList = [];

  create(song: string) {
    this.songList.push(song);
    return this.songList;
  }

  findAll() {
    return this.songList;
  }
}
