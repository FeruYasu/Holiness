import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import User from '@modules/users/infra/typeorm/entities/User';

@Entity('sermons')
class Sermon {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  preacher_id: string;

  @Column()
  description: string;

  @Column()
  video_url: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'preacher_id', referencedColumnName: 'id' })
  user: User;

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @CreateDateColumn()
  @Exclude()
  updated_at: Date;
}

export default Sermon;
