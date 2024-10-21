export interface IAuthManager {
    create(userId: string): Promise<string>;
    parse(accessToken: string): Promise<string>;
    newRefreshToken(): Promise<string>
}