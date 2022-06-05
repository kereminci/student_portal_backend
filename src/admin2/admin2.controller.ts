import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { Admin2Service } from './admin2.service';
import { CreateAdmin2Dto } from './dto/create-admin2.dto';
import { UpdateAdmin2Dto } from './dto/update-admin2.dto';

@Controller('admin2')
export class Admin2Controller {
  constructor(private readonly admin2Service: Admin2Service) {}

  @UseGuards(AuthenticatedGuard)
  @Post ("/addadmin2")
  addAnnouncement(@Body() createAnn:CreateAdmin2Dto ){
    return this.admin2Service.addadmin2(createAnn);
  }

  @UseGuards(AuthenticatedGuard)
  @Post ("/deladmin2")
  delAnnouncement(@Body() delAnn:CreateAdmin2Dto ){
    return this.admin2Service.deladmin2(delAnn);
  }

  @UseGuards(AuthenticatedGuard)
  @Post ("/updateadmin2")
  updateAnnouncement(@Body() updateAnn:CreateAdmin2Dto ){
    return this.admin2Service.updateadmin2(updateAnn);
  }

  @UseGuards(AuthenticatedGuard)
  @Post ("/readadmin2")
  readAnnouncement(@Body() readAnn:CreateAdmin2Dto ){
    return this.admin2Service.readadmin2(readAnn);
  }


}
