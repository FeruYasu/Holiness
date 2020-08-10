import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import MinistryLeaders from '@modules/ministries/infra/typeorm/entities/MinistryLeaders';
import { Exclude } from 'class-transformer';
import MinistryMembers from './MinistryMembers';

@Entity('ministries')
class Ministry {
  @PrimaryGeneratedColumn('uuid')
  @Exclude()
  id: string;

  @Column()
  name: string;

  @Column()
  local: string;

  @Column()
  date: Date;

  @Column()
  hour: Date;

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
  ministries_members: MinistryMembers[];
}

export default Ministry;
