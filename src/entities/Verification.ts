import { 
    BaseEntity, 
    BeforeInsert,
    Column, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn, 
    } from 'typeorm';

import { verificationTarget } from '../types/types';

const PHONE = "PHONE";
const EMAIL = "EMAIL";

@Entity()
class Verification extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({type :"text", enum: [PHONE, EMAIL]})
  target: verificationTarget

  @Column({ type: "text" })
  payload: string;

  @Column({ type: "text" })
  key: string;

  @Column({type: "boolean", default: false})
  used: boolean;

  @CreateDateColumn() createAt: string;
  @UpdateDateColumn() updateAt: string;

  @BeforeInsert() // beforeInsert로 함수를 Entity에 포함할 함수를 만들 수 있다.
  createKey(): void {
    if(this.target === PHONE){
      this.key = Math.floor(Math.random() * 100000).toString()
    } else if(this.target === EMAIL){
      this.key = Math.random()
      .toString(36)
      .substr(2);
    }
  }
}

export default Verification;