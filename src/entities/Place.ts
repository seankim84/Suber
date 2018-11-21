import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import User from "./User";


@Entity()
class Place extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;

    @Column({type: "text"})
    name: string;

    @Column({ type: "text" })
    address: string;

    @Column({type: "double precision", default: 0})
    lat: number;

    @Column({type: "double precision", default: 0})
    lng: number;

    @Column({type: "boolean", default: false})
    isFav: boolean;

    @Column({type: "int", nullable: true})
    userId: number; // user라는 이름에 Id만을 붙여주면 자동적으로 user의 ID가 넣어 진다.
    //이런식으로 하면, 내가 place를 찾았을때, relation 옵션을 전부다 불러올 필요가 없다.

    @ManyToOne(type => User, user => user.places)
    user: User;

    @CreateDateColumn() createdAt: string;
    
    @UpdateDateColumn() updatedAt: string;
}

export default Place;