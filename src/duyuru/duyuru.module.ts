import { Module } from '@nestjs/common';
import { DuyuruService } from './duyuru.service';
import { DuyuruController } from './duyuru.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { DuyuruRepository } from './repos/duyuru.repo';

@Module({
  controllers: [DuyuruController],
  providers: [DuyuruService, DuyuruRepository],
  exports: [DuyuruService],
  imports:[PrismaModule] 
  
})
export class DuyuruModule {}
