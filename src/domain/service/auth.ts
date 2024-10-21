import { IAuthSessionRepository } from "@domain/interfaces/authSessionRepository";

export const newAuthService = (repository: IAuthSessionRepository) => {
    const findSession = async () => {
        //
    }

    const updateOrCreateSession = async () => {
        //
    }

    const deleteSession = async () => {
        //
    }

    return {
        findSession,
        updateOrCreateSession,
        deleteSession
    }
}