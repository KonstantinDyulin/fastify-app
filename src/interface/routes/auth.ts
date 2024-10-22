import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { AuthController } from '@interface/controllers/auth';
import { AuthService } from "@domain/service/auth";

import { RegisterDTO } from '@interface/dto/auth/register';
import { AuthSessionRepository } from "@infrastructure/repositories/typed-orm/authSessionRepository";
import { AuthUseCase } from '@domain/usecase/auth';
import { AuthManager } from '../../helpers/authManager';
import { UserService } from '@domain/service/user';
import { UserRepository } from '@infrastructure/repositories/typed-orm/userRepository';

export const authRoutes: FastifyPluginAsyncZod = async (fastifyInstance: FastifyInstance, options: FastifyPluginOptions) => {
    const authManager = new AuthManager(
        15 * 60 * 1000,
        7 * 24 * 60 * 60 * 1000,
        process.env.JWT_KEY || 'jwt_ket'
    );

    const authSessionRepository = new AuthSessionRepository();
    const userRepository = new UserRepository()

    const authService = new AuthService(authSessionRepository);
    const userService = new UserService(userRepository)

    const authUseCase = new AuthUseCase(
        authService,
        userService,
        authManager
    );
    const authController = new AuthController(authUseCase);

    fastifyInstance.route({
        method: 'POST',
        url: '/register',
        schema: { body: RegisterDTO },
        handler: authController.register
    });
    fastifyInstance.route({
        method: 'POST',
        url: '/login',
        handler: authController.login
    });
    fastifyInstance.route({
        method: 'GET',
        url: '/logout',
        handler: authController.logout
    });
    fastifyInstance.route({
        method: 'GET',
        url: '/refresh_access_token',
        handler: authController.refreshAccessToken
    })
}