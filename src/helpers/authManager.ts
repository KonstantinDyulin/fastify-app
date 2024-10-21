
export const AuthManager = (
    accessTokenTTL: number,
    refreshTokenTTL: number,
    signedString: string | undefined,
) => {
    if (!signedString) {
        throw new Error('JWT_KEY is not defined');
    }

    const create = async (userId: string) => {
        return 'token'
    }

    const parse = async (accessToken: string) => {
        return 'token'
    }

    const newRefreshToken = async () => {
        return 'token'
    }

    return {
        create,
        parse,
        newRefreshToken
    }
}