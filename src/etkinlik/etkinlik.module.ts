import { Module } from '@nestjs/common';
import { EtkinlikService } from './etkinlik.service';
import { EtkinlikController } from './etkinlik.controller';

@Module({
  controllers: [EtkinlikController],
  providers: [EtkinlikService]
})
export class EtkinlikModule {}
