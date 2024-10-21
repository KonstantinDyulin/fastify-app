import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';
import { AuthSession } from './AuthSession';

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

    @OneToMany(() => AuthSession, (authSession) => authSession.refreshToken)
    refreshTokens: AuthSession[]

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}