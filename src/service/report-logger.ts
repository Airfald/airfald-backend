import { ReportType } from '@src/interface/common'
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoggerEntity } from '@src/entities/logger';

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// 当前类名: ${context.getClass()['name']}
// 当前方法名: ${context.getHandler()['name']}
// 当前请求: ${request.method} - ${request.url}
// IP: ${request.ip}
// 当前Params参数: ${JSON.stringify(request.params, null, 2)}
// 当前Query参数: ${JSON.stringify(request.query, null, 2)}
// 当前请求体: ${JSON.stringify(request.body, null, 2)}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n`;
// Logger.access(fileName, logStr);

@Injectable()
export class ReportLoggerService {
  constructor(
    @InjectRepository(LoggerEntity)
    private repository: Repository<LoggerEntity>,
  ) {}

  report (loggerInfo) {
    return this.repository.save({
      loggerInfo
    });
  }

  testReport () {
    return 'testReport'
  }
}
