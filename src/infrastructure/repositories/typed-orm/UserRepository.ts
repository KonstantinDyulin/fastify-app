import { DataSource, Repository } from 'typeorm';
import { User } from '@infrastructure/models/typed-orm/User';
import { OrmDataSource } from '@infrastructure/database/typed-orm/dataSource';

export class UserRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = OrmDataSource.getRepository(User);
    }

    async findById(id: string): Promise<any> {
        return this.repository.findOneBy({ id });
    }
}

const newUserRepository = (dataSource: DataSource) => {
    const repository = dataSource.getRepository(User);
}