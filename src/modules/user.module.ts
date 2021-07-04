import { Module } from '@nestjs/common';
import { UserService } from '@src/service/user';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from '@src/controllers/user';
import { UserEntity } from '@src/entities/user'

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})

export class UserModule {}
