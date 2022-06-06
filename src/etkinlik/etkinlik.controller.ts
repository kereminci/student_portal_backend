import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateEtkinlikDto } from './dto/create-etkinlik.dto';
import { UpdateEtkinlikDto } from './dto/update-etkinlik.dto';
import { EtkinlikRepository } from './repos/etkinlik.repo';
import { EtkinlikService } from './etkinlik.service';
@Controller('etkinlik')
export class EtkinlikController {
  constructor(private readonly etkinlikService: EtkinlikService) {}

  // TODO add exception handling to all routes

  
  @Post ("/addEtkinlik")
  addActivities(@Body() createEtkinilk:CreateEtkinlikDto ){
    return this.etkinlikService.addEtkinlik(createEtkinilk);
  }

  @Post ("/delEtkinlik/:id")
  delActivities(@Param('id') id: number ){
    return this.etkinlikService.delEtkinlik(+id);
  }

  @Post ("/updateEtkinlik/:id")
  updateActivities(@Param('id') id:number ,@Body() updateEtkinlik:UpdateEtkinlikDto ){
    return this.etkinlikService.updateEtkinlik(+id, updateEtkinlik);
  }

  @Get (":id")
  readActivities(@Param('id') id: number){
    return this.etkinlikService.getEtkinlik(+id);
  }


}
