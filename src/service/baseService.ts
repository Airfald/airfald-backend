import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DemoEntity } from '@src/entities/demo';
import { UserEntity } from '@src/entities/user';
import { LoggerEntity } from '@src/entities/logger';
import { ApiException } from '@src/common/filters/api-exception'
import { ApiCode } from '@src/interface/common'

@Injectable()
export class BaseService {
  constructor(
    @InjectRepository(DemoEntity)
    private DemoRepository: Repository<DemoEntity>,
    @InjectRepository(LoggerEntity)
    private LoggerEntityRepository: Repository<LoggerEntity>,
  ) {}

  findAllDemo(): Promise<DemoEntity[]> {
    return this.DemoRepository.find();
  }

  report (loggerInfo) {
    return this.LoggerEntityRepository.save({
      loggerInfo: 'test baseService！'
    });
  }

  login () {
    return ''
  }

  logout () {
    return ''
  }
}
