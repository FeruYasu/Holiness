import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import { Exclude } from 'class-transformer';
import Ministry from './Ministry';

@Entity('ministries_members')
class MinistryMembers {
  @PrimaryGeneratedColumn('uuid')
  @Exclude()
  id: string;

  @ManyToOne(() => Ministry, ministry => ministry.ministries_members, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'ministry_id', referencedColumnName: 'id' })
  ministry: Ministry;

  @ManyToOne(() => User, user => user.ministries_members, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  member: User;

  @Column()
  @Exclude()
  ministry_id: string;

  @Column()
  @Exclude()
  user_id: string;

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @UpdateDateColumn()
  @Exclude()
  updated_at: Date;
}

export default MinistryMembers;
