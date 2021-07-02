import { Module } from '@nestjs/common';
import { ReportLoggerService } from '@src/service/report-logger';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerController } from '@src/controllers/logger.controller';
import { LoggerEntity } from '@src/entities/logger'

@Module({
  imports: [TypeOrmModule.forFeature([LoggerEntity])],
  controllers: [LoggerController],
  providers: [ReportLoggerService],
  exports: [ReportLoggerService]
})

export class LogerModule {}
