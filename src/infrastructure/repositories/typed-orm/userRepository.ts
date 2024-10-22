import { User } from '@infrastructure/models/typed-orm/user';
import { OrmDataSource } from '@infrastructure/database/typed-orm/dataSource';
import { Repository } from 'typeorm';

export class UserRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = OrmDataSource.getRepository(User);
    }

    async create() {
        //
    }

    async findById() {
        //
    }

    async findByEmail() {
        //
    }

    async getAll() {
        //
    }
}