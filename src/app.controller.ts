import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { SetMetadata } from '@nestjs/common';


@Controller()
export class AppController {


@UseGuards(LocalAuthGuard)
@Post('auth/login')
async login(@Request() req) {
  console.log(req.user)
  return{msg: "logged in"};
}

@UseGuards(AuthenticatedGuard)
@Get('protected')
async getHello() {
  return  "Hello world";
}


@Get('open')
async hello() {
  return  "Hello world";
}

}