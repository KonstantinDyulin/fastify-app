import { IAuthSessionRepository } from '@domain/interfaces/authSessionRepository';
import { IAuthService } from '@domain/interfaces/authService';

export class AuthService implements IAuthService {
    constructor(
        private authRepository: IAuthSessionRepository
    ) {
    }

    async findSession() {
        //
    }

    async updateOrCreateSession() {
        //
    }

    async deleteSession() {
        //
    }
}