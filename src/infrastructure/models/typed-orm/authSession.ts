import {
    Column,
    Entity,
    ManyToOne, PrimaryColumn, PrimaryGeneratedColumn
} from 'typeorm';
import { User } from "./user";

@Entity()
export class AuthSession {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', {
        length: 255
    })
    userAgent: string

    @Column('varchar', {
        length: 255
    })
    clientIp: string

    @Column('varchar', {
        length: 255,
        unique: true
    })
    refreshToken: string

    @ManyToOne(() => User, (user) => user.refreshTokens, {
        onDelete: 'CASCADE'
    })
    user: User
}