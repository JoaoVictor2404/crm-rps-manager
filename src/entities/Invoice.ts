import {
  Entity, PrimaryGeneratedColumn, Column, CreateDateColumn
} from 'typeorm';

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  invoiceNumber!: string;

  @Column('decimal')
  total!: number;

  @CreateDateColumn()
  createdAt!: Date;
}
