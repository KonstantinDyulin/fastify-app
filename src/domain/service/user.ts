import { IUserRepository } from '@domain/interfaces/userRepository';

export const UserService = (repository: IUserRepository) => {
    const create = async () => {
        //
    }

    const listAll = async () => {
        //
    }

    const findById = async () => {
        //
    }

    return {
        create,
        listAll,
        findById
    }
}