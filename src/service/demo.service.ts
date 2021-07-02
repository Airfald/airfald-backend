import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DemoEntity } from '@src/entities/demo';
import { LoggerEntity } from '@src/entities/logger';
import { ApiException } from '@src/common/filters/api-exception'
import { ApiCode } from '@src/interface/common'
import { ReportLoggerService } from '@src/service/report-logger';

@Injectable()
export class DemoService {
  constructor(
    @InjectRepository(DemoEntity)
    private DemoRepository: Repository<DemoEntity>,
    @InjectRepository(LoggerEntity)
    private LoggerEntityRepository: Repository<LoggerEntity>,
    private readonly reportLoggerService: ReportLoggerService
  ) {}

  // =============================测试多个数据库=========================================
  findAllDemo(): Promise<DemoEntity[]> {
    return this.DemoRepository.find();
  }

  report (loggerInfo) {
    return this.LoggerEntityRepository.save({
      loggerInfo: 'test baseService！'
    });
  }
  // =============================测试多个数据库=========================================

  testReport(): string {
    return this.reportLoggerService.testReport()
  }

  getDemo(): string {
    return 'demo method!';
  }

  create(demo: any): Promise<any> {
    const data = new DemoEntity()
    data.firstName = 'demo'
    return this.DemoRepository.save(data);
  }

  findAll(): Promise<DemoEntity[]> {
    return this.DemoRepository.find();
  }

  findOne(id: string): Promise<DemoEntity> {
    return this.DemoRepository.findOne(id);
  }

  remove(id?: string): Promise<void> {
    throw new ApiException('ID不合法', ApiCode.CUSTIOM_CODE, 200)
    // await this.repository.delete(id);
  }
}
