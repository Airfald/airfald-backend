import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from '@src/service/user';
import { UserDto } from '@src/dto/user'
import { BaseControllers } from '@src/controllers/baseController'


// 路由前缀
@Controller('user')
export class UserController extends BaseControllers {
  constructor(private readonly userService: UserService) {
    super(userService)
  }

  @Post('/create')
  create(@Body() userDto: UserDto): any {
    return this.userService.create(userDto)
  }

  @Post('/update')
  async update(@Body() updateDto: UserDto) {
    return await this.userService.update(updateDto);
  }
}
