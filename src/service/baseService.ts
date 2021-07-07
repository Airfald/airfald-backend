import { Repository } from 'typeorm';
import { IPaginationQuery } from '@src/interface/common'

/**
 * 抽象CRUD操作基础服务
 * 统一封装的只能写any, 这样就会根据Dto校验不了，实际情况下业务不同增删改查也也会不一样。基本用不到只用于最基础的增删改查。
 * @class BaseService
 */
export abstract class BaseService<T> {
  constructor(private readonly _model: Repository<T>) {}

  create(createDto: any) {
    return this._model.save(createDto)
  }

  async delete(id: number) {
    let removeData = await this._model.findOne({ where: { id } });

    return await this._model.remove(removeData);
  }

  async update(updateDto: any) {
    let updateObj = await this._model.findOne({ where: { id: updateDto.id } });
    let newUpdateObj = { ...updateObj, ...updateDto }

    return await this._model.save(newUpdateObj);
  }

  async detail(id: number) {
    let obj = await this._model.findOne({ where: { id } });

    return obj
  }

  // take 和 skip 可能看起来像 limit 和 offset
  async getList(query: IPaginationQuery<null>) {
    const { pageNumber = 1, pageSize = 10 } = query

    const total = await this._model.count()

    const result = await this._model
    .createQueryBuilder()
    .skip((pageNumber - 1) * pageSize)
    .take(pageSize)
    .getMany();

    return {
      list: result,
      count: total
    }
  }
}
