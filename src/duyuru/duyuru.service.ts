import { Injectable } from '@nestjs/common';
import { CreateDuyuruDto } from './dto/create-duyuru.dto';
import { UpdateDuyuruDto } from './dto/update-duyuru.dto';
import { DuyuruRepository } from './repos/duyuru.repo';

@Injectable()
export class DuyuruService {
  constructor (private readonly duyuruRepo: DuyuruRepository) {}
  create(createDuyuruDto: CreateDuyuruDto) {
    return 'This action adds a new duyuru';
  }

  findAll() {
    return `This action returns all duyuru`;
  }

  findOne(id: number) {
    return `This action returns a #${id} duyuru`;
  }

  update(id: number, updateDuyuruDto: UpdateDuyuruDto) {
    return `This action updates a #${id} duyuru`;
  }

  remove(id: number) {
    return `This action removes a #${id} duyuru`;
  }
}
