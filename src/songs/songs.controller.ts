import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songService: SongsService) {}

  @Get()
  findAll(): string[] {
    return this.songService.findAll();
  }

  @Get(':id')
  find(): string {
    return 'song found';
  }

  @Post()
  create(): string[] {
    return this.songService.create('Maya by Gymu')
  }

  @Put(':id')
  update(): string {
    return 'song updated';
  }

  @Delete(':id')
  remove(): string {
    return 'song deleted';
  }
}
