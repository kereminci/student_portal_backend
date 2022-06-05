import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { HaberService } from './haber.service';
import { CreateHaberDto } from './dto/create-haber.dto';
import { UpdateHaberDto } from './dto/update-haber.dto';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@Controller('haber')
export class HaberController {
  constructor(private readonly haberService: HaberService) {}
  
  @UseGuards(AuthenticatedGuard)
  @Post("/addhaber")
  addNews(@Body() createNew: CreateHaberDto) {
    return this.haberService.addhaber(createNew);
  }

  @UseGuards(AuthenticatedGuard)
  @Post ("/delhaber/:id")
  delNews(@Param('id') id: number ){
    return this.haberService.delhaber(+id);
  }

  @UseGuards(AuthenticatedGuard)
  @Post ("/updatehaber/:id")
  updateNews(@Param('id') id:number ,@Body() updateNew:UpdateHaberDto ){
    return this.haberService.updatehaber(+id, updateNew);
  }

  @UseGuards(AuthenticatedGuard)
  @Get (":id")
  readNews(@Param('id') id: number){
    return this.haberService.gethaber(+id);
  }
  
}
