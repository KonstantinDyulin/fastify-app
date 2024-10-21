export interface IAuthSessionRepository {
    findSession(): Promise<any>;
    createSession(): Promise<any>;
    updateSession(): Promise<any>;
    deleteSession(): Promise<any>;
}