import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HaberService } from './haber.service';
import { CreateHaberDto } from './dto/create-haber.dto';
import { UpdateHaberDto } from './dto/update-haber.dto';

@Controller('haber')
export class HaberController {
  constructor(private readonly haberService: HaberService) {}
  
  @Post("/addhaber")
  addNews(@Body() createNew: CreateHaberDto) {
    return this.haberService.addhaber(createNew);
  }
  
  @Post ("/delhaber/:id")
  delNews(@Param('id') id: number ){
    return this.haberService.delhaber(+id);
  }

  @Post ("/updatehaber/:id")
  updateNews(@Param('id') id:number ,@Body() updateNew:UpdateHaberDto ){
    return this.haberService.updatehaber(+id, updateNew);
  }

  @Get (":id")
  readNews(@Param('id') id: number){
    return this.haberService.gethaber(+id);
  }
  
}
