import { Test, TestingModule } from '@nestjs/testing';
import { DuyuruService } from './duyuru.service';

describe('DuyuruService', () => {
  let service: DuyuruService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DuyuruService],
    }).compile();

    service = module.get<DuyuruService>(DuyuruService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
