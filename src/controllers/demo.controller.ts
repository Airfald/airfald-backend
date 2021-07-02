import { Controller, Get, Param } from '@nestjs/common';
import { DemoService } from '@src/service/demo.service';
import { ReportLoggerService } from '@src/service/report-logger';

// 路由前缀
@Controller('demo')
export class DemoController {
  constructor(
    private readonly demoService: DemoService,
    private readonly reportLoggerService: ReportLoggerService
  ) {}

  // =============================测试多个数据库=========================================
  @Get('/findAllDemo')
  findAllDemo(): any {
    return this.demoService.findAllDemo();
  }

  @Get('/report')
  report(): any {
    return this.demoService.report({} as any);
  }
  // =============================测试多个数据库=========================================

  // =============================测试多个 service =========================================
  @Get('/loggerReport')
  loggerReport(): any {
    return this.reportLoggerService.report('loggerReport');
  }
  // =============================测试多个 service =========================================

  // service 中又可以调用其它service
  @Get('/testReport')
  testReport(): any {
    return this.demoService.testReport();
  }

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
