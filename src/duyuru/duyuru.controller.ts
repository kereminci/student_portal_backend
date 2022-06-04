import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DuyuruService } from './duyuru.service';
import { CreateDuyuruDto } from './dto/create-duyuru.dto';
import { UpdateDuyuruDto } from './dto/update-duyuru.dto';

@Controller('duyuru')
export class DuyuruController {
  constructor(private readonly duyuruService: DuyuruService) {}

  @Post ("/addduyuru")
  addAnnouncement(@Body() createAnn:CreateDuyuruDto ){
    return this.duyuruService.addduyuru(createAnn);
  }

  @Post ("/delduyuru")
  delAnnouncement(@Body() delAnn:CreateDuyuruDto ){
    return this.duyuruService.delduyuru(delAnn);
  }

  @Post ("/updateduyuru")
  updateAnnouncement(@Body() updateAnn:CreateDuyuruDto ){
    return this.duyuruService.updateduyuru(updateAnn);
  }

  @Post ("/readduyuru")
  readAnnouncement(@Body() readAnn:CreateDuyuruDto ){
    return this.duyuruService.readduyuru(readAnn);
  }


}
