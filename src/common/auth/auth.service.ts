import { Injectable } from '@nestjs/common';
import { UserService } from '@src/service/user';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username, pass);
    // if (user && user.password === pass) {
    //   const { password, ...result } = user;
    //   return result;
    // }
    if (user) {
      return user;
    }

    return null;
  }

  async login(user: any) {
    console.log('测试 user', user)
    this.validateUser(user.username, user.passWord)
    const payload = { username: user.username, sub: user.userId };
    // 找到用户并且穿件token
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
