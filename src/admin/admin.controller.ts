import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @UseGuards(AuthenticatedGuard)
  @Post('create')
  create(@Body() createAdminDto: CreateAdminDto) {
    
    return this.adminService.create(createAdminDto);
  }

  @UseGuards(AuthenticatedGuard)
  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @UseGuards(AuthenticatedGuard)
  @Get(':username')
  findOne(@Param('username') username: string) {
    console.log(username)
    return this.adminService.findOne(username);
  }

  @UseGuards(AuthenticatedGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @UseGuards(AuthenticatedGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }

  @UseGuards(AuthenticatedGuard)
  @Post("/addnews") // POST localhost:3000/admin/addnews
  addNews(@Body() createNews: CreateNewsDto) {
    console.log(createNews);
    return this.adminService.addNews(createNews);
    



  }

}
