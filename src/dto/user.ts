import { IsNotEmpty } from 'class-validator'
import { BaseDto } from '@src/dto/base'

export class UserDto extends BaseDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  userName: string;

  @IsNotEmpty({ message: '密码不能为空' })
  passWord: string;

  isAdmin?: boolean;
}
