import { Controller, Get } from '@nestjs/common';
import { BaseService } from '@src/service/baseService';

// 提供基础接口的服务
@Controller('baseService')
export class baseServiceController {
  constructor(private readonly baseService: BaseService) {}

  @Get('/login')
  login(): string {
    return this.baseService.login();
  }

  @Get('/logout')
  logout(): string {
    return this.baseService.logout();
  }
}
