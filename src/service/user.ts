import { Injectable, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthGuard } from '@nestjs/passport'
import { UserEntity } from '@src/entities/user';
import { UserDto } from '@src/dto/user'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {}

  @UseGuards(AuthGuard('local'))
  login (user: any) {

  }

  create (createDto: UserDto) {
    return this.repository.save(createDto)
  }

  findOne (username, password): any {
    // return this.repository.findOne({ where: { name: userName } })
    return {
      username,
      password
    }
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

