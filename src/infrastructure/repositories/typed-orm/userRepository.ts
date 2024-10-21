import { User } from '@infrastructure/models/typed-orm/user';
import { OrmDataSource } from '@infrastructure/database/typed-orm/dataSource';
import { IUserRepository } from "@domain/interfaces/userRepository";

export const UserRepository= () => {
    const repository = OrmDataSource.getRepository(User);

    const create = async () => {
        //
    };

    const findById = async () => {
        //
    };

    const findByEmail = async () => {
        //
    };

    const getAll = async () => {
        //
    }

    return {
        create,
        findById,
        findByEmail,
        getAll
    }
}