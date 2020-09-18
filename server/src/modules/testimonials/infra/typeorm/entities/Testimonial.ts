import Ministry from '@modules/ministries/infra/typeorm/entities/Ministry';
import User from '@modules/users/infra/typeorm/entities/User';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('testimonials')
class Testimonial {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  image: string;

  @Column()
  user_id: string;

  @Column()
  ministry_id: string;

  @Column({ default: false })
  approved: boolean;

  @Column({ default: 0 })
  emoji1: number;

  @Column({ default: 0 })
  emoji2: number;

  @Column({ default: 0 })
  emoji3: number;

  @Column({ default: 0 })
  emoji4: number;

  @Column({ default: 0 })
  emoji5: number;

  @Column({ default: 0 })
  emoji6: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @ManyToOne(() => Ministry)
  @JoinColumn({ name: 'ministry_id', referencedColumnName: 'id' })
  ministry: Ministry;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default Testimonial;
