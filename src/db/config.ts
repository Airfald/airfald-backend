import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '39.108.101.133',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'airfald-sql',
  entities: [`${__dirname}/../entities/**/*.{js,ts}`],
  synchronize: false,
  logging: ["error"],
}
