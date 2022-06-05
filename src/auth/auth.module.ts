import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AdminModule } from 'src/admin/admin.module';
import { SessionSerializer } from './session.serilaizer';

@Module({
  imports: [ PassportModule.register({session: true}), AdminModule],
  providers: [AuthService, LocalStrategy , SessionSerializer],
})
export class AuthModule {}
