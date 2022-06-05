import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { DuyuruModule } from './duyuru/duyuru.module';
import { HaberModule } from './haber/haber.module';
import { EtkinlikModule } from './etkinlik/etkinlik.module';
import { Admin2Module } from './admin2/admin2.module';

@Module({
  imports: [AuthModule, AdminModule, UsersModule, PrismaModule, ConfigModule.forRoot({isGlobal: true,}), DuyuruModule, HaberModule, EtkinlikModule,Admin2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
