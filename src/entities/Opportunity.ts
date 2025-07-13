import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne
} from 'typeorm';
import { User } from './User';

@Entity()
export class Opportunity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  stage!: 'prospecting' | 'proposal' | 'negotiation' | 'won' | 'lost';

  @Column()
  amount!: number;

  @ManyToOne(() => User, user => user.appointments)
  owner!: User;
}
