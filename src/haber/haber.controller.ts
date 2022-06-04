import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HaberService } from './haber.service';
import { CreateHaberDto } from './dto/create-haber.dto';
import { UpdateHaberDto } from './dto/update-haber.dto';

@Controller('haber')
export class HaberController {
  constructor(private readonly haberService: HaberService) {}

  @Post()
  create(@Body() createHaberDto: CreateHaberDto) {
    return this.haberService.create(createHaberDto);
  }

  @Get()
  findAll() {
    return this.haberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.haberService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHaberDto: UpdateHaberDto) {
    return this.haberService.update(+id, updateHaberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.haberService.remove(+id);
  }
}
