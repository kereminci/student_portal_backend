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

  delduyuru(id: number){
    return this.duyuruRepo.delduyuru(+id);
  }

  updateduyuru(id: number ,updateduyuruDto: UpdateDuyuruDto){
    return this.duyuruRepo.updateduyuru(+id, updateduyuruDto);
  }

  getduyuru(id: number){
    return this.duyuruRepo.getduyuru(+id);
  }
}
