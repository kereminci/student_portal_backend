import { Module } from '@nestjs/common';
import { HaberService } from './haber.service';
import { HaberController } from './haber.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { HaberRepository } from './repos/haber.repos';

@Module({
  controllers: [HaberController],
  providers: [HaberService, HaberRepository],
  exports : [HaberService],
  imports: [PrismaModule]
})
export class HaberModule {}
