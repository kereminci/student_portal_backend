import { Injectable } from '@nestjs/common';
import { CreateEtkinlikDto } from './dto/create-etkinlik.dto';
import { UpdateEtkinlikDto } from './dto/update-etkinlik.dto';

@Injectable()
export class EtkinlikService {
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
