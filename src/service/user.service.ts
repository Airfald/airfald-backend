import { Repository } from 'typeorm';

export interface IPaginationQuery {
  pageNumber: number
  pageSize: number
  data?: any
}

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
    let remove = await this._model.findOne(id);

    return await this._model.remove(remove);
  }

  async update(updateDto: any) {
    let updateObj = await this._model.findOne(updateDto.id);
    let newUpdateObj = { ...updateObj, ...updateDto }

    return await this._model.save(newUpdateObj);
  }

  async detail(id: number) {
    let obj = await this._model.findOne(id);

    return obj
  }

  // take 和 skip 可能看起来像 limit 和 offset
  async getList(query: IPaginationQuery) {
    const { pageNumber, pageSize } = query

    const [result, total] = await this._model.findAndCount(
        {
          take: pageSize,
          skip: (pageSize - 1) * pageNumber
        }
    );

    return {
        data: result,
        count: total
    }
  }
}
