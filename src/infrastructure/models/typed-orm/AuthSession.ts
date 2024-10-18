import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class AuthSession {
    @ManyToOne(() => User, (user) => user.id)
    @PrimaryGeneratedColumn('uuid')
    userId: string;

    @Column({
        type: 'varchar'
    })
    userAgent: string

    @Column({
        type: 'varchar'
    })
    clientIp: string

    @Column({
        type: 'varchar',
        unique: true
    })
    refreshToken: string
}