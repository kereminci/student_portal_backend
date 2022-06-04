import { Test, TestingModule } from '@nestjs/testing';
import { EtkinlikController } from './etkinlik.controller';
import { EtkinlikService } from './etkinlik.service';

describe('EtkinlikController', () => {
  let controller: EtkinlikController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EtkinlikController],
      providers: [EtkinlikService],
    }).compile();

    controller = module.get<EtkinlikController>(EtkinlikController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
