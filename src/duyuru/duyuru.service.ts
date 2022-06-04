import { Injectable } from '@nestjs/common';
import { CreateDuyuruDto } from './dto/create-duyuru.dto';
import { UpdateDuyuruDto } from './dto/update-duyuru.dto';
import { DuyuruRepository } from './repos/duyuru.repo';

@Injectable()
export class DuyuruService {
  constructor (private readonly duyuruRepo: DuyuruRepository) {}
  addduyuru(createduyuruDto: CreateDuyuruDto){
    return this.duyuruRepo.addduyuru(createduyuruDto);
  }

  delduyuru(delduyuruDto: CreateDuyuruDto){
    return this.duyuruRepo.delduyuru(delduyuruDto);
  }

  updateduyuru(updateduyuruDto: CreateDuyuruDto){
    return this.duyuruRepo.updateduyuru(updateduyuruDto);
  }

  readduyuru(readduyuruDto: CreateDuyuruDto){
    return this.duyuruRepo.readduyuru(readduyuruDto);
  }
}
