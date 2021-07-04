import { DemoModule } from '@src/modules/demo.module'
import { LogerModule } from '@src/modules/logger.module'
import { BaseServiceModule } from '@src/modules/baseService'
import { UserModule } from '@src/modules/user.module'

export default [
  DemoModule,
  LogerModule,
  BaseServiceModule,
  UserModule
]
