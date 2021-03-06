import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DemoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: false })
  isActive: boolean;
}
