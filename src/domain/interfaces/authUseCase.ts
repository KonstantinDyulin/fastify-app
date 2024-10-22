
export interface IAuthUseCase {
    login: () => Promise<any>;
    register(name: string, email: string, password: string): Promise<any>;
    logout: () => Promise<any>;
    refreshAccessToken: () => Promise<any>
}