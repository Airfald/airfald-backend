import { Controller, Post, Body } from '@nestjs/common';
import { ReportLoggerService } from '@src/service/report-logger';

// 路由前缀
@Controller('report')
export class LoggerController {
  constructor(private readonly reportLoggerService: ReportLoggerService) {}

  @Post('/')
  report(@Body() body: any): any {
    return this.reportLoggerService.report(body.loggerInfo)
  }
}
