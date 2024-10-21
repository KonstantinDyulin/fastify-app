export interface IUserRepository {
    create(): Promise<any>;
    findById(): Promise<any>;
    findByEmail(): Promise<any>;
    getAll(): Promise<any>
}