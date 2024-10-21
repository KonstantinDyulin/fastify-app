import { DataSource } from 'typeorm';
import { User } from '@infrastructure/models/typed-orm/user';
import { AuthSession } from "@infrastructure/models/typed-orm/authSession";

export const OrmDataSource = new DataSource({
    type: 'sqlite',
    database: 'sqlite.db',
    entities: [ User, AuthSession ],
    synchronize: true,
});