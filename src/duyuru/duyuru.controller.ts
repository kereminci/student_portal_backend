import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DuyuruService } from './duyuru.service';
import { CreateDuyuruDto } from './dto/create-duyuru.dto';
import { UpdateDuyuruDto } from './dto/update-duyuru.dto';

@Controller('duyuru')
export class DuyuruController {
  constructor(private readonly duyuruService: DuyuruService) {}

  @Post()
  create(@Body() createDuyuruDto: CreateDuyuruDto) {
    return this.duyuruService.create(createDuyuruDto);
  }

  @Get()
  findAll() {
    return this.duyuruService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.duyuruService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDuyuruDto: UpdateDuyuruDto) {
    return this.duyuruService.update(+id, updateDuyuruDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.duyuruService.remove(+id);
  }
}
