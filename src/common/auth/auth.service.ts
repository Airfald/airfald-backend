import { Injectable } from '@nestjs/common';
import { UserService } from '@src/service/user';
import { JwtService } from '@nestjs/jwt';
import { ApiException } from '@src/common/filters/api-exception'
import { ApiCode } from '@src/interface/common'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(userName: string, passWord: string): Promise<any> {
    const user = await this.usersService.findOne(userName, passWord);

    if (user) {
      return user;
    }

    throw new ApiException('姓名账号错误', ApiCode.CUSTIOM_CODE, 200)
  }

  async login(user: any) {
    const userDto = await this.validateUser(user.username, user.password)

    const payload = { username: userDto.userName, sub: userDto.id };
    // 找到用户并且创建token
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
