import { Test, TestingModule } from '@nestjs/testing';
import { HaberController } from './haber.controller';
import { HaberService } from './haber.service';

describe('HaberController', () => {
  let controller: HaberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HaberController],
      providers: [HaberService],
    }).compile();

    controller = module.get<HaberController>(HaberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
