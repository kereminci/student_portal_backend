import { Injectable } from '@nestjs/common';
import { CreateHaberDto } from './dto/create-haber.dto';
import { UpdateHaberDto } from './dto/update-haber.dto';
import { HaberRepository } from './repos/haber.repos';

@Injectable()
export class HaberService {
  constructor (private readonly haberRepo: HaberRepository) {}
  addhaber(createHaberDto: CreateHaberDto) {
    return this.haberRepo.addhaber(createHaberDto);
  }

  delhaber(id: number){
    return this.haberRepo.delhaber(+id);
  }

  updatehaber(id: number ,updatehaberDto: UpdateHaberDto){
    return this.haberRepo.updatehaber(+id, updatehaberDto);
  }

  gethaber(id: number){
    return this.haberRepo.gethaber(+id);
  }

}
