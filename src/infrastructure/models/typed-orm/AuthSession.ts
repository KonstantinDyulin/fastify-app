import {
    Column,
    Entity,
    ManyToOne,
} from "typeorm";
import { User } from "./User";

@Entity()
export class AuthSession {
    @ManyToOne(() => User, (user) => user.id)
    @Column('varchar', {
        primary: true
    })
    userId: string;

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
}