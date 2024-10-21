import { OrmDataSource } from "@infrastructure/database/typed-orm/dataSource";
import { AuthSession } from "@infrastructure/models/typed-orm/authSession";

export const newAuthSessionRepository = () => {
    const repository = OrmDataSource.getRepository(AuthSession)

    const findSession = async () => {
        //
    }

    const createSession = async () => {
        //
    }

    const updateSession = async () => {
        //
    }

    const deleteSession = async () => {
        //
    }

    return {
        findSession,
        createSession,
        updateSession,
        deleteSession
    }
}