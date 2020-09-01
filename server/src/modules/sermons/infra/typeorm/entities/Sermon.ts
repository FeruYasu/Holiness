import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import uploadConfig from '@config/upload';

import { Exclude, Expose } from 'class-transformer';
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

  @Column()
  @Exclude()
  thumbnail: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'preacher_id', referencedColumnName: 'id' })
  preacher: User;

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @CreateDateColumn()
  @Exclude()
  updated_at: Date;

  @Expose({ name: 'photoUrl' })
  getPhotoUrl(): string | null {
    if (!this.thumbnail) {
      return null;
    }

    switch (uploadConfig.driver) {
      case 'disk':
        return `${process.env.APP_API_URL}/files/${this.thumbnail}`;
      case 's3':
        return `https://${uploadConfig.config.aws.bucket}.s3.amazonaws.com/${this.thumbnail}`;
      default:
        return null;
    }
  }
}

export default Sermon;
