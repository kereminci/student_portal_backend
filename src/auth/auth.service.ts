import { Injectable } from '@nestjs/common';
import { AdminService } from 'src/admin/admin.service';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private adminService: AdminService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.adminService.findOne(username);
    const result = await bcrypt.compare(pass, user.password);

    if (user && result) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}