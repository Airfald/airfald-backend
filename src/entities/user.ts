import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: boolean;

  @Column({ default: false })
  passWord: boolean;

  @Column({ default: false })
  isAdmin: boolean;
}
