import { Test, TestingModule } from '@nestjs/testing';
import { HaberService } from './haber.service';

describe('HaberService', () => {
  let service: HaberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HaberService],
    }).compile();

    service = module.get<HaberService>(HaberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
