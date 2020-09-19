import Ministry from '@modules/ministries/infra/typeorm/entities/Ministry';
import User from '@modules/users/infra/typeorm/entities/User';
import { Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import uploadConfig from '@config/upload';

@Entity('testimonials')
class Testimonial {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  photo: string;

  @Column()
  user_id: string;

  @Column()
  ministry_id: string;

  @Column()
  approved: boolean;

  @Column('simple-array')
  emoji1: string[];

  @Column('varchar', { array: true })
  emoji2: string;

  @Column('varchar', { array: true })
  emoji3: string;

  @Column('varchar', { array: true })
  emoji4: string;

  @Column('varchar', { array: true })
  emoji5: string;

  @Column('varchar', { array: true })
  emoji6: string;

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

  @Expose({ name: 'photo_url' })
  getPhotoUrl(): string | null {
    if (!this.photo) {
      return null;
    }

    switch (uploadConfig.driver) {
      case 'disk':
        return `${process.env.APP_API_URL}/files/${this.photo}`;
      case 's3':
        return `https://${uploadConfig.config.aws.bucket}.s3.amazonaws.com/${this.photo}`;
      default:
        return null;
    }
  }
}

export default Testimonial;
