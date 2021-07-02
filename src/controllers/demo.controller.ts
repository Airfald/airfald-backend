import { Controller, Get, Param } from '@nestjs/common';
import { DemoService } from '@src/service/demo.service';

// 路由前缀
@Controller('demo')
export class DemoController {
  constructor(private readonly demoService: DemoService) {}

  @Get('/')
  getDemo(): string {
    return this.demoService.getDemo();
  }

  @Get('/save')
  save(): any {
    return this.demoService.create({} as any);
  }

  @Get('/list')
  findAll(): any {
    return this.demoService.findAll();
  }

  @Get('/detail/:id')
  getDetail(@Param('id') id): any {
    return this.demoService.findOne(id);
  }

  @Get('/remove')
  remove(): any {
    return this.demoService.remove();
  }
}
