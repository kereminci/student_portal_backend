/*import { Injectable } from '@nestjs/common';
import { CreateEtkinlikDto } from './dto/create-etkinlik.dto';
import { UpdateEtkinlikDto } from './dto/update-etkinlik.dto';
import { EtkinlikRepository } from './repos/etkinlik.repo';

@Injectable()
export class EtkinlikService {
  constructor (private readonly etkinlikRepo: EtkinlikRepository) {}
  create(createEtkinlikDto: CreateEtkinlikDto) {
    return 'This action adds a new etkinlik';
  }

  findAll() {
    return `This action returns all etkinlik`;
  }

  findOne(id: number) {
    return `This action returns a #${id} etkinlik`;
  }

  update(id: number, updateEtkinlikDto: UpdateEtkinlikDto) {
    return `This action updates a #${id} etkinlik`;
  }

  remove(id: number) {
    return `This action removes a #${id} etkinlik`;
  }
}
*/

import { Injectable } from '@nestjs/common';

import { CreateEtkinlikDto } from './dto/create-etkinlik.dto';
import { UpdateEtkinlikDto } from './dto/update-etkinlik.dto';
import { EtkinlikRepository } from './repos/etkinlik.repo';
@Injectable()
export class EtkinlikService {
  constructor (private readonly etkinlikRepo: EtkinlikRepository) {}
  addEtkinlik(createEtkinlikDto: CreateEtkinlikDto){
    return this.etkinlikRepo.addEtkinlik(createEtkinlikDto);
  }

  delEtkinlik(id: number){
    return this.etkinlikRepo.delEtkinlik(+id);
  }

  updateEtkinlik(id: number ,updateEtkinlikDto: UpdateEtkinlikDto){
    return this.etkinlikRepo.updateEtkinlik(+id, updateEtkinlikDto);
  }

  getEtkinlik(id: number){
    return this.etkinlikRepo.getEtkinlik(+id);
  }
}
