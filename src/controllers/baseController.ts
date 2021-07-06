import { Get, Param, Post, Body, Query } from '@nestjs/common';
import { IPaginationQuery } from '@src/interface/common'

export interface IBaseService {
  create: (dto: any) => any
  update: (dto: any) => any
  delete: (id: number) => any
  detail: (id: number) => any
  getList: (dto: any) => any
}

/**
 * 抽象CRUD操作基础服务
 * 统一封装的只能写any, 这样就会根据Dto校验不了，实际情况下业务不同增删改查也也会不一样。基本用不到只用于最基础的增删改查。
 * @class BaseControllers
 */
export abstract class BaseControllers {
  constructor(private readonly _service: any) {}

  @Post('/create')
  create(@Body() createDto: any) {
    return this._service.create(createDto)
  }

  @Get('/delete/:id')
  async delete(@Param('id') id: number) {
    return await this._service.delete(id);
  }

  @Post('/update')
  async update(@Body() updateDto: any) {
    return await this._service.update(updateDto);
  }

  @Get('/detail/:id')
  async detail(@Param('id') id: number) {
    return await this._service.detail(id);
  }

  @Get('/list')
  async getList(@Query() query: IPaginationQuery<null>) {
    return await this._service.getList(query);
  }
}
