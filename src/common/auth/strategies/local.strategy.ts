import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  // 不用token时使用比如，login接口
  // 用了passport 传参必须是 { username, password } 否则不会进入 validate 函数直接校验不通过。
  // 优化： 直接拿中间件写检验而不是使用 passport 这样限制太死了。
  async validate(userName: string, password: string): Promise<any> {
    // console.log('测试', userName, password)
    const user = await this.authService.validateUser(userName, password);

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
