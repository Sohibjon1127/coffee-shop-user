import { BaseEntity } from 'src/common/database/base.entity';
import { Roles, UserStatus } from 'src/common/enum';
import { Column, Entity } from 'typeorm';

@Entity('user')
export class UserEntity extends BaseEntity {
  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar' })
  hashed_password: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  first_name: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  last_name: string;

  @Column({ type: 'enum', enum: UserStatus, default: UserStatus.NVR })
  status: UserStatus;

  @Column({ type: 'enum', enum: Roles, default: Roles.USER })
  role: Roles;
}
