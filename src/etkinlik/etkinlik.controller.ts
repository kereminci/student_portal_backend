import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EtkinlikService } from './etkinlik.service';
import { CreateEtkinlikDto } from './dto/create-etkinlik.dto';
import { UpdateEtkinlikDto } from './dto/update-etkinlik.dto';

@Controller('etkinlik')
export class EtkinlikController {
  constructor(private readonly etkinlikService: EtkinlikService) {}

  @Post()
  create(@Body() createEtkinlikDto: CreateEtkinlikDto) {
    return this.etkinlikService.create(createEtkinlikDto);
  }

  @Get()
  findAll() {
    return this.etkinlikService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.etkinlikService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEtkinlikDto: UpdateEtkinlikDto) {
    return this.etkinlikService.update(+id, updateEtkinlikDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.etkinlikService.remove(+id);
  }
}
