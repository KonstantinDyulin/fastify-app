export interface IUserService {
    create(): Promise<any>;
    listAll(): Promise<any>;
    findById(): Promise<any>
}