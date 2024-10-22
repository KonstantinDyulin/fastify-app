export interface IUserEntity {
    id: string;
    name: string;
    email: string;
    password: string,
    createdAt: Date,
    updatedAt: Date,
}

export const UserEntity = (
    id: string,
    name: string,
    email: string,
    password: string,
    createdAt: Date,
    updatedAt: Date
): IUserEntity => {
    return {
        id,
        name,
        email,
        password,
        createdAt,
        updatedAt
    }
}