import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '@src/entities/user';
import { UserDto } from '@src/dto/user'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {}

  create (createDto: UserDto) {
    return this.repository.save(createDto)
  }

  update () {

  }

  detail () {

  }

  remove () {

  }

  getList () {

  }

  getCount () {

  }
}

