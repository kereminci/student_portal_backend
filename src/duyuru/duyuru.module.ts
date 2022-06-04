import { Module } from '@nestjs/common';
import { DuyuruService } from './duyuru.service';
import { DuyuruController } from './duyuru.controller';

@Module({
  controllers: [DuyuruController],
  providers: [DuyuruService]
})
export class DuyuruModule {}
