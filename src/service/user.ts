import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '@src/entities/user';
import { UserDto } from '@src/dto/user'
import { BaseService } from '@src/service/baseService'


@Injectable()
export class UserService extends BaseService<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {
    super(repository)
  }

  findOne(userName: string, passWord: string) {
    return this.repository.findOne({ where: { userName, passWord } })
  }

  create (createDto: UserDto) {
    return this.repository.save(createDto)
  }
}

