import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Admin2Service } from './admin2.service';
import { CreateAdmin2Dto } from './dto/create-admin2.dto';
import { UpdateAdmin2Dto } from './dto/update-admin2.dto';

@Controller('admin2')
export class Admin2Controller {
  constructor(private readonly admin2Service: Admin2Service) {}

  @Post ("/addadmin2")
  addAnnouncement(@Body() createAnn:CreateAdmin2Dto ){
    return this.admin2Service.addadmin2(createAnn);
  }

  @Post ("/deladmin2")
  delAnnouncement(@Body() delAnn:CreateAdmin2Dto ){
    return this.admin2Service.deladmin2(delAnn);
  }

  @Post ("/updateadmin2")
  updateAnnouncement(@Body() updateAnn:CreateAdmin2Dto ){
    return this.admin2Service.updateadmin2(updateAnn);
  }

  @Post ("/readadmin2")
  readAnnouncement(@Body() readAnn:CreateAdmin2Dto ){
    return this.admin2Service.readadmin2(readAnn);
  }


}
