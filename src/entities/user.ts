import { Entity, Column } from 'typeorm';
import { BaseEntity } from '@src/entities/base'

@Entity()
export class UserEntity extends BaseEntity {
  @Column()
  userName: string;

  @Column()
  passWord: string;

  @Column({ default: false })
  isAdmin: boolean;
}
