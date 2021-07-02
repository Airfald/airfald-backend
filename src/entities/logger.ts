import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LoggerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  loggerInfo: string;
}
