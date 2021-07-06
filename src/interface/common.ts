export interface IPaginationQuery<T> {
  pageNumber,
  pageSize,
  data?: T // 具体查询字段
}

export enum ApiCode {
  SUCCESS = 0,
  CUSTIOM_CODE = 11111
}

export enum ReportType {
  TRACE = 'TRACE',
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  FATAL = 'FATAL',
}
