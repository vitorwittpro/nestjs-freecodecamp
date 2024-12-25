import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-songs.dto';

@Controller('songs')
export class SongsController {
  constructor(private songService: SongsService) {}

  @Get()
  findAll(): string[] {
    try {
      return this.songService.findAll();
    } catch (error) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }

  @Get(':id')
  find(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ): string {
    return `fetch succesfully completed. song ${typeof id}`;
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
