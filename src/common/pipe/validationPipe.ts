import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      // 只需要取第一个错误信息并返回即可
      const msg = Object.values(errors[0].constraints)[0];
      console.log(errors)
      throw new BadRequestException(`${msg}`);
    }

    return value;
  }

  private toValidate(metatype: Function): boolean {
    console.log('metatype', metatype)
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
