import { Injectable } from '@nestjs/common';
import { CreateAdmin2Dto } from './dto/create-admin2.dto';
import { UpdateAdmin2Dto } from './dto/update-admin2.dto';
import { Admin2Repository } from './repos/admin2.repo';

@Injectable()
export class Admin2Service {
  constructor (private readonly admin2Repo: Admin2Repository) {}
  addadmin2(createadmin2Dto: CreateAdmin2Dto){
    return this.admin2Repo.addadmin2(createadmin2Dto);
  }

  deladmin2(deladmin2Dto: CreateAdmin2Dto){
    return this.admin2Repo.deladmin2(deladmin2Dto);
  }

  updateadmin2(updateadmin2Dto: CreateAdmin2Dto){
    return this.admin2Repo.updateadmin2(updateadmin2Dto);
  }

  readadmin2(readadmin2Dto: CreateAdmin2Dto){
    return this.admin2Repo.readadmin2(readadmin2Dto);
  }
}
