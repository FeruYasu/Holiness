import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tags')
class Tags {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}

export default Tags;
