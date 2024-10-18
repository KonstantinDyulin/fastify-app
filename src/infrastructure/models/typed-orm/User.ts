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

    @Column({
        type: 'varchar'
    })
    name: string;

    @Column({
        type: 'varchar',
        unique: true
    })
    email: string;

    @Column({
        type: 'varchar'
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