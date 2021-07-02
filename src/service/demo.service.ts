import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DemoEntity } from '@src/entities/demo';
import { ApiException } from '@src/common/filters/api-exception'
import { ApiCode } from '@src/interface/common'

@Injectable()
export class DemoService {
  constructor(
    @InjectRepository(DemoEntity)
    private repository: Repository<DemoEntity>,
  ) {}

  getDemo(): string {
    return 'demo method!';
  }

  create(demo: any): Promise<any> {
    const data = new DemoEntity()
    data.firstName = 'demo'
    return this.repository.save(data);
  }

  findAll(): Promise<DemoEntity[]> {
    return this.repository.find();
  }

  findOne(id: string): Promise<DemoEntity> {
    return this.repository.findOne(id);
  }

  remove(id?: string): Promise<void> {
    throw new ApiException('ID不合法', ApiCode.CUSTIOM_CODE, 200)
    // await this.repository.delete(id);
  }
}
