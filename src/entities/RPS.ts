import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn
} from 'typeorm';
import { User } from './User';

@Entity()
export class RPS {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  city!: string;

  @Column()
  series!: string;

  @Column()
  number!: string;

  @Column('decimal')
  amount!: number;

  @CreateDateColumn()
  issuedAt!: Date;

  @ManyToOne(() => User, user => user.appointments)
  issuer!: User;
}
