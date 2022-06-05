import { Module } from '@nestjs/common';
import { Admin2Service } from './admin2.service';
import { Admin2Controller } from './admin2.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { Admin2Repository } from './repos/admin2.repo';

@Module({
  controllers: [Admin2Controller],
  providers: [Admin2Service, Admin2Repository],
  exports: [Admin2Service],
  imports:[PrismaModule] 
  
})
export class Admin2Module {}
