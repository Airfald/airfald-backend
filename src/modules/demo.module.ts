import { Module } from '@nestjs/common';
import { DemoController } from '@src/controllers/demo.controller';
import { DemoService } from '@src/service/demo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemoEntity } from '@src/entities/demo'
import { LoggerEntity } from '@src/entities/logger'
import { LogerModule } from '@src/modules/logger.module'

// - imports => 导入其它的模块一个或者多个(需要export导出服务), => 可以在controllers 或者 service中直接使用。
// - providers => 一个或者多个 service, 可以在controllers中使用。 或者 providers 中相互使用。
// controllers => providers => imports

// global() 使用全局module

@Module({
  // 导入多个数据库 module
  imports: [TypeOrmModule.forFeature([DemoEntity]), TypeOrmModule.forFeature([LoggerEntity]), LogerModule],
  controllers: [DemoController],
  providers: [DemoService],
})

export class DemoModule {}
