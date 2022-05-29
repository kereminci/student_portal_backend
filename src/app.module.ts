import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AuthModule, AdminModule, UsersModule, PrismaModule, ConfigModule.forRoot({isGlobal: true,})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}