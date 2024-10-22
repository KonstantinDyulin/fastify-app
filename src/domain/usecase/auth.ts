import { IAuthService } from '@domain/interfaces/authService';
import { IUserService } from '@domain/interfaces/userService';
import { IAuthManager } from '@domain/interfaces/authManager';
import { IAuthUseCase } from '@domain/interfaces/authUseCase';

export class AuthUseCase implements IAuthUseCase {
    constructor(
        private authService: IAuthService,
        private userService: IUserService,
        private authManager: IAuthManager
    ) {
    }

    async login() {
        //
    }

    async register(name: string, email: string, password: string) {

    }

    async logout() {
        //
    }

    async refreshAccessToken() {
        //
    }
}