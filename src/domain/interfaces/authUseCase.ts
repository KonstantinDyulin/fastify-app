export interface IAuthUseCase {
    login(): Promise<any>;
    register(): Promise<any>;
    logout(): Promise<any>;
    refreshAccessToken(): Promise<any>
}