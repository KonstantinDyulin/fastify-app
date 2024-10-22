export interface IAuthSession {
    id: string;
    userID: string;
    userAgent: string;
    clientIP: string;
    refreshToken: string;
    createdAt: Date;
    updatedAt: Date;
}

export const createAuthSession = (
    id: string,
    userID: string,
    userAgent: string,
    clientIP: string,
    refreshToken: string,
    createdAt: Date,
    updatedAt: Date,
): IAuthSession => {
    return {
        id,
        userID,
        userAgent,
        clientIP,
        refreshToken,
        createdAt,
        updatedAt
    };
}