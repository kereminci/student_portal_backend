import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
@UseGuards(LocalAuthGuard)
@Post('auth/login')
async login(@Request() req) {
  console.log(req.user)
  return req.user;
}


@Get()
async hello() {
  return  "Hello world";
}
}