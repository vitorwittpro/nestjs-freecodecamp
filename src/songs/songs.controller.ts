import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Get()
  findAll(): [] {
    return [];
  }

  @Get(':id')
  find(): string {
    return 'song found';
  }

  @Post()
  create(): string {
    return 'song created';
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
