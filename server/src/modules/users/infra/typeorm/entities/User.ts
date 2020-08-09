import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import uploadConfig from '@config/upload';

import { Exclude, Expose } from 'class-transformer';
import MinistryLeaders from '@modules/ministries/infra/typeorm/entities/MinistryLeaders';
import MinistryMembers from '@modules/ministries/infra/typeorm/entities/MinistryMembers';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  avatar: string;

  @OneToMany(
    () => MinistryLeaders,
    ministriesleaders => ministriesleaders.leader,
    {
      cascade: true,
    },
  )
  ministries_leaders: MinistryLeaders[];

  @OneToMany(
    () => MinistryMembers,
    ministriesmembers => ministriesmembers.leader,
    {
      cascade: true,
    },
  )
  ministries_members: MinistryMembers[];

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @UpdateDateColumn()
  @Exclude()
  updated_at: Date;

  @Expose({ name: 'avatar_url' })
  getAvatarUrl(): string | null {
    if (!this.avatar) {
      return null;
    }

    switch (uploadConfig.driver) {
      case 'disk':
        return `${process.env.APP_API_URL}/files/${this.avatar}`;
      case 's3':
        return `https://${uploadConfig.config.aws.bucket}.s3.amazonaws.com/${this.avatar}`;
      default:
        return null;
    }
  }
}

export default User;
