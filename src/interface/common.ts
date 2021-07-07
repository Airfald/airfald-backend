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


// 用interface描述**数据结构**，用type描述**类型关系**
// type vs interface
// 顾名思义： 类型更适合常量，声明是什么类型
type stringorNumber = string | number | ReportType

// 接口适合一整个对象数据传输
interface test {
  a: stringorNumber
}

// interface 能够声明合并
// interface User {
//   name: string
//   age: number
// }

// interface User {
//   sex: string
// }

// /*
// User 接口为 {
//   name: string
//   age: number
//   sex: string
// }
// */
