import axios from 'axios'
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { ApiException } from '@src/common/filters/api-exception'
import { ReportType } from '@src/interface/common'

const report = (loggerInfo) => {
  axios.post('http://localhost:3000/report', { loggerInfo })
    .then(response => {
      // console.log(response.data);
    })
    .catch(error => {
      // console.log(error);
    });
}

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception, host: ArgumentsHost): void {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    const request = ctx.getRequest()
    const status = exception.getStatus()

    const loggerInfo = {
      type: ReportType.ERROR,
      IP:  `${request.ip}`,
      url: `${request.method} - ${request.url}`,
      params:  `${JSON.stringify(request.params)}`,
      query:  `${JSON.stringify(request.query)}`,
      body: `${JSON.stringify(request.body)}`,
      response: `${JSON.stringify((exception as HttpException).getResponse())}`,
    }

    if (exception instanceof ApiException) {
      const customError = {
        msg: (exception as ApiException).getErrorMessage(),
        code: (exception as ApiException).gerErrorCode(),
      }

      response.status(status).json({
        ...customError,
        path: request.url
      })
      // 上报错误
      report(JSON.stringify({ ...loggerInfo, ...customError }))
    } else {
      // 上报错误
      report(JSON.stringify(loggerInfo))
      // 处理非手动抛出的情况
      response.status(status).json((exception as HttpException).getResponse())
    }
  }
}
