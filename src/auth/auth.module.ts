import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AdminModule } from 'src/admin/admin.module';

@Module({
  imports: [ PassportModule, AdminModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
