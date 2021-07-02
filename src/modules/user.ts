import { Module } from '@nestjs/common';
import { DemoController } from '@src/controllers/demo.controller';
import { DemoService } from '@src/service/demo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemoEntity } from '@src/entities/demo'

@Module({
  imports: [TypeOrmModule.forFeature([DemoEntity])],
  controllers: [DemoController],
  providers: [DemoService],
})

export class DemoModule {}
