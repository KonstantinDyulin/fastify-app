import { OrmDataSource } from '@infrastructure/database/typed-orm/dataSource';
import { IAuthSessionRepository } from '@domain/interfaces/authSessionRepository';
import { AuthSession } from '@infrastructure/models/typed-orm/authSession';
import { Repository } from 'typeorm';

export class AuthSessionRepository implements IAuthSessionRepository {
    private repository: Repository<AuthSession>;

    constructor() {
        this.repository = OrmDataSource.getRepository(AuthSession);
    }

    async createSession() {
        //
    }

    async deleteSession() {
        //
    }

    async findSession() {
        //
    }

    async updateSession() {
        //
    }
}