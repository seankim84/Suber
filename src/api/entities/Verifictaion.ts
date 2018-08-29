import { 
    BaseEntity, 
    Column, 
    Entity, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn 
} from 'typeorm';

@Entity()
class Verification extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;
    
    @Column({type: "text" })
    target: string;
    
    @Column({ type: "text" })
    payload: string;
    
    @Column({ type: "text" })
    key: string;

    @Column({ type: "boolean" })
    used: boolean;

    @CreateDateColumn() createdAt: string;
    @UpdateDateColumn() updatedAt: string;
}

export default Verification;