import { Injectable } from '@nestjs/common';
import { CreateHaberDto } from './dto/create-haber.dto';
import { UpdateHaberDto } from './dto/update-haber.dto';
import { HaberRepository } from './repos/haber.repos';

@Injectable()
export class HaberService {
  constructor (private readonly haberRepo: HaberRepository) {}
  create(createHaberDto: CreateHaberDto) {
    return 'This action adds a new haber';
  }

  findAll() {
    return `This action returns all haber`;
  }

  findOne(id: number) {
    return `This action returns a #${id} haber`;
  }

  update(id: number, updateHaberDto: UpdateHaberDto) {
    return `This action updates a #${id} haber`;
  }

  remove(id: number) {
    return `This action removes a #${id} haber`;
  }
}