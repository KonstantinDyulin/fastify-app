import { DataSource } from 'typeorm';
import { User } from '@infrastructure/models/typed-orm/User';
import { AuthSession } from "@infrastructure/models/typed-orm/AuthSession";

export const OrmDataSource = new DataSource({
    type: 'sqlite',
    database: 'sqlite.db',
    entities: [ User, AuthSession ],
    synchronize: true,
});