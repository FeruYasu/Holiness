import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinColumn,
} from 'typeorm';

import User from './User';

@Entity('ministries')
class Ministries {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  local: string;

  @Column()
  date: Date;

  @Column()
  hour: Date;

  @Column()
  leaders_id: string;

  @ManyToMany(() => User)
  @JoinColumn({ name: 'leaders_id' })
  leader: User;

  @Column()
  members_id: string;

  @ManyToMany(() => User)
  @JoinColumn({ name: 'members_id' })
  member: User;
}

export default Ministries;
