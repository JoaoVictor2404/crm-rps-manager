import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany
} from 'typeorm';
import { Appointment } from './RPS';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ default: 'user' })
  role!: 'admin' | 'sales' | 'finance';

  @OneToMany(() => Appointment, appt => appt.user)
  appointments!: Appointment[];
}
