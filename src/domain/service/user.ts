import { IUserRepository } from '@domain/interfaces/userRepository';
import { IUserService } from '@domain/interfaces/userService';

export class UserService implements IUserService {
    constructor(
        private userRepository: IUserRepository
    ) {
    }

    async create() {
        //
    }

    async listAll() {
        //
    }

    async findById() {
        //
    }
}