import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from '@src/service/user';
import { UserDto } from '@src/dto/user'

// 路由前缀
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  create(@Body() userDto: UserDto): any {
    return this.userService.create(userDto)
  }
}