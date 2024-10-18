import { FastifyReply, FastifyRequest } from 'fastify';
import { RegisterDTO, RegisterDTOType } from '../dto/auth/register';
import { UserRepository } from '@infrastructure/repositories/typed-orm/UserRepository';

export const newAuthController = (userRepository: UserRepository) => {
    const register = async (request: FastifyRequest, reply: FastifyReply) => {
        const registerDTO: RegisterDTOType = RegisterDTO.parse(request.body);

        const user = await userRepository.findById('daff14e3-3592-4f3c-a789-e1a0baf904a3')

        reply.send(user);
    };

    const login = async (request: FastifyRequest, reply: FastifyReply) => {
        reply.send('Login route');
    };

    const logout = async (request: FastifyRequest, reply: FastifyReply) => {
        reply.send('Logout route');
    };

    const refreshAccessToken = async (request: FastifyRequest, reply: FastifyReply) => {
        reply.send('Refresh access token route');
    };

    return {
        register,
        login,
        logout,
        refreshAccessToken
    }
}