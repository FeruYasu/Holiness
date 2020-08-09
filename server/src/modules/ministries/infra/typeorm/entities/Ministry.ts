import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import MinistryLeaders from '@modules/ministries/infra/typeorm/entities/MinistryLeaders';
import { Exclude } from 'class-transformer';

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
  ministries_leaders: MinistryLeaders[];
}

export default Ministry;
