import uploadConfig from '@config/upload';

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

import { Exclude, Expose } from 'class-transformer';

@Entity('events')
class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  local: string;

  @Column()
  description: string;

  @Column()
  photo: string;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @CreateDateColumn()
  @Exclude()
  updated_at: Date;

  @Expose({ name: 'photoUrl' })
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

export default Event;
