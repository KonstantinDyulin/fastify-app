import { FastifyReply, FastifyRequest } from 'fastify';
import { RegisterDTO, RegisterDTOType } from '../dto/auth/register';
import { IAuthUseCase } from '@domain/interfaces/authUseCase';

export class AuthController {
    constructor(
        private authUseCase: IAuthUseCase
    ) {
    }

    async register(request: FastifyRequest, reply: FastifyReply) {
        const registerDTO: RegisterDTOType = RegisterDTO.parse(request.body);

        reply.send('Register route');
    };

    async login(request: FastifyRequest, reply: FastifyReply) {
        reply.send('Login route');
    };

    async logout(request: FastifyRequest, reply: FastifyReply) {
        reply.send('Logout route');
    };

    async refreshAccessToken(request: FastifyRequest, reply: FastifyReply) {
        reply.send('Refresh access token route');
    };
}