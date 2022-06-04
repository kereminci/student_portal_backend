import { Module } from '@nestjs/common';
import { EtkinlikService } from './etkinlik.service';
import { EtkinlikController } from './etkinlik.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EtkinlikRepository } from './repos/etkinlik.repo';

@Module({
  controllers: [EtkinlikController],
  providers: [EtkinlikService, EtkinlikRepository],
  exports : [EtkinlikService],
  imports: [PrismaModule]
})
export class EtkinlikModule {}
