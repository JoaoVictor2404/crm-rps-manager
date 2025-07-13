import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne
} from 'typeorm';
import { User } from './User';

@Entity()
export class Lead {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  company!: string;

  @Column()
  contactName!: string;

  @Column()
  value!: number;

  @Column({ default: 'new' })
  status!: 'new' | 'contacted' | 'qualified' | 'lost';

  @ManyToOne(() => User, user => user.appointments)
  owner!: User;
}
