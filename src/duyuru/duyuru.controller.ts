import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DuyuruService } from './duyuru.service';
import { CreateDuyuruDto } from './dto/create-duyuru.dto';
import { UpdateDuyuruDto } from './dto/update-duyuru.dto';

@Controller('duyuru')
export class DuyuruController {
  constructor(private readonly duyuruService: DuyuruService) {}

  // TODO add exception handling to all routes

  @Post ("/addduyuru")
  addAnnouncement(@Body() createAnn:CreateDuyuruDto ){
    return this.duyuruService.addduyuru(createAnn);
  }

  @Post ("/delduyuru/:id")
  delAnnouncement(@Param('id') id: number ){
    return this.duyuruService.delduyuru(+id);
  }

  @Post ("/updateduyuru/:id")
  updateAnnouncement(@Param('id') id:number ,@Body() updateAnn:UpdateDuyuruDto ){
    return this.duyuruService.updateduyuru(+id, updateAnn);
  }

  @Get (":id")
  readAnnouncement(@Param('id') id: number){
    return this.duyuruService.getduyuru(+id);
  }


}
