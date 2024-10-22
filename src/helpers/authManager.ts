import { IAuthManager } from '@domain/interfaces/authManager';

export class AuthManager implements IAuthManager {
    constructor(
        private accessTokenTTL: number,
        private refreshTokenTTL: number,
        private signedString: string
    ) {
        if (!signedString) {
            throw new Error('JWT_KEY is not defined');
        }
    }

    async create(userId: string) {
        return '';
    }

    async parse(accessToken: string) {
        return '';
    }

    async newRefreshToken() {
        return '';
    }
}