
import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AdminRepository } from './repos/admin.repo';

@Injectable()
export class AdminService {
  constructor (private readonly adminRepo: AdminRepository) {}

  create(createAdminDto: CreateAdminDto) {
    
    return this.adminRepo.saveAdmin(createAdminDto);
  }

  findAll() {
    return `This action returns all admin`;
  }

  findOne(username: string) {
    return this.adminRepo.findOne(username);
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
