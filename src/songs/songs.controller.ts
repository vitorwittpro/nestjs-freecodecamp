import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-songs.dto';

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
  create(@Body() createSongDto: CreateSongDto): string[] {
    return this.songService.create(createSongDto);
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
