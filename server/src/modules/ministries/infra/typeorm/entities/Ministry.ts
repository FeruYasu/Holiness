import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import uploadConfig from '@config/upload';

import MinistryLeaders from '@modules/ministries/infra/typeorm/entities/MinistryLeaders';
import { Expose } from 'class-transformer';
import MinistryMembers from './MinistryMembers';

@Entity('ministries')
class Ministry {
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
  photo: string;

  @Column()
  description: string;

  @OneToMany(
    () => MinistryLeaders,
    ministriesleaders => ministriesleaders.ministry,
    {
      cascade: true,
    },
  )
  ministries_leaders: Partial<MinistryLeaders>[];

  @OneToMany(
    () => MinistryMembers,
    menistriesmembers => menistriesmembers.ministry,
    {
      cascade: true,
    },
  )
  ministries_members: Partial<MinistryMembers>[];

  @Expose({ name: 'photoUrl' })
  getAvatarUrl(): string | null {
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

export default Ministry;
