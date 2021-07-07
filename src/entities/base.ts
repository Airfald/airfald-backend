import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import * as moment from 'moment'

@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(0)',
    precision: 0,
    transformer: {
      to: (value: string) => moment(value).format('YYYY-MM-DD hh:mm:ss'),
      from: (value: string) => moment(value).format('YYYY-MM-DD hh:mm:ss'),
    }
  })
  public createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(0)',
    onUpdate: 'CURRENT_TIMESTAMP(0)',
    precision: 0,
    transformer: {
      to: (value: string) => moment(value).format('YYYY-MM-DD hh:mm:ss'),
      from: (value: string) => moment(value).format('YYYY-MM-DD hh:mm:ss'),
    }
  })
  public updatedAt: Date;
}
