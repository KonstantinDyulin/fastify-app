import { FastifyReply, FastifyRequest } from 'fastify';
import { RegisterDTO, RegisterDTOType } from '../dto/auth/register';
import { IUserRepository } from "@domain/interfaces/userRepository";

export const newAuthController = () => {
    const register = async (request: FastifyRequest, reply: FastifyReply) => {
        const registerDTO: RegisterDTOType = RegisterDTO.parse(request.body);

        reply.send('Register route');
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