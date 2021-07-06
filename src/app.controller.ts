import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport'
import { AuthService } from '@src/common/auth/auth.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('/auth/login')
  login (@Body() user: any) {
    return this.authService.login(user)
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/profile')
  profile (@Param() user: any) {
    return user
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
