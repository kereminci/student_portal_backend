import { Test, TestingModule } from '@nestjs/testing';
import { DuyuruController } from './duyuru.controller';
import { DuyuruService } from './duyuru.service';

describe('DuyuruController', () => {
  let controller: DuyuruController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DuyuruController],
      providers: [DuyuruService],
    }).compile();

    controller = module.get<DuyuruController>(DuyuruController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
