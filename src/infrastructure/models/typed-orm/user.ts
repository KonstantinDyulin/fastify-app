import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';
import { AuthSession } from './authSession';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', {
        length: 255
    })
    name: string;

    @Column('varchar', {
        length: 255
    })
    email: string;

    @Column('varchar', {
        length: 255
    })
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @OneToMany(() => AuthSession, (authSession) => authSession.user)
    refreshTokens: AuthSession[]
}