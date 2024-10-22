export interface IAuthService {
    findSession(): Promise<any>,

    updateOrCreateSession(): Promise<any>,

    deleteSession(): Promise<any>
}