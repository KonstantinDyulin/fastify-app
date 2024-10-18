import { randomUUID } from 'node:crypto';

export interface AuthSession {
    id: string;
    userID: string;
    userAgent: string;
    clientIP: string;
    refreshToken: string;
    createdAt: Date;
    updatedAt: Date;
}

export function createAuthSession(
    userID: string,
    userAgent: string,
    clientIP: string,
    refreshToken: string
): AuthSession {
    const now = new Date();
    return {
        id: randomUUID(),
        userID,
        userAgent,
        clientIP,
        refreshToken,
        createdAt: now,
        updatedAt: now,
    };
}