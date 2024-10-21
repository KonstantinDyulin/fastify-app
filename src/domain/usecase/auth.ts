import { IAuthService } from "@domain/interfaces/authService";
import { IUserService } from '@domain/interfaces/userService';
import { IAuthManager } from '@domain/interfaces/authManager';

export const AuthUseCase = (
    authService: IAuthService,
    userService: IUserService,
    authManager: IAuthManager
) => {
    const register = async () => {
        //
    }

    const login = async () => {
        //
    }

    const logout = async () => {
        //
    }

    const refreshAccessToken = async () => {
        //
    }

    return {
        register,
        login,
        logout,
        refreshAccessToken
    }
}