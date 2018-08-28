import {} from 'class-validator'
import { BaseEntity, Column, CreateDateColumn ,Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';


@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", unique: true })
  @IsEmail()
  email: string;

  @Column({ type: "boolean", default: "false" })
  @Column({ type: "text" })
  firstName: string;

  @Column({ type: "text" })
  lastName: string;

  @Column({ type: "number" })
  age: number;

  @Column({ type: "text" })
  pasword: string;

  @Column({ type: "text" })
  phoneNumber: string;

  @Column({ type: "boolean", default: "false" })
  verifiedPhoneNumber: boolean;

  @Column({ type: "text" })
  profilePhoto: string;

  @CreateDateColumn() createAt: string;
  @UpdateDateColumn() updateAt: string;
}

export default User;
