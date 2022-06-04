import { Module } from '@nestjs/common';
import { HaberService } from './haber.service';
import { HaberController } from './haber.controller';

@Module({
  controllers: [HaberController],
  providers: [HaberService]
})
export class HaberModule {}
