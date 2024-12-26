import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';

const mockSongService = {
  findAll() {
    return [{ id: 1, song: 'Need You by NXTZ' }];
  },
};

@Module({
  providers: [
    SongsService,
    {
      provide: SongsService,
      useValue: mockSongService,
    },
  ],
  controllers: [SongsController],
})
export class SongsModule {}
