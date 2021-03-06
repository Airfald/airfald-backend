import { Controller, Get, Post, Body, Param, HttpCode } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport'
import { AuthService } from '@src/common/auth/auth.service'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  @HttpCode(200)
  login (@Body() user: any) {
    return this.authService.login(user)
  }

  // 校验token
  @UseGuards(AuthGuard('jwt'))
  @Get('/check')
  check () {
    return true
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
