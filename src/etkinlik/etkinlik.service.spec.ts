import { Test, TestingModule } from '@nestjs/testing';
import { EtkinlikService } from './etkinlik.service';

describe('EtkinlikService', () => {
  let service: EtkinlikService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EtkinlikService],
    }).compile();

    service = module.get<EtkinlikService>(EtkinlikService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
