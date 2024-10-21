import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { AuthController } from '@interface/controllers/auth';
import { AuthService } from "@domain/service/auth";

import { RegisterDTO } from '@interface/dto/auth/register';
import { AuthSessionRepository } from "@infrastructure/repositories/typed-orm/authSessionRepository";

export const authRoutes: FastifyPluginAsyncZod = async (fastifyInstance: FastifyInstance, options: FastifyPluginOptions) => {
    const authSessionRepository = AuthSessionRepository();
    const userService = AuthService(authSessionRepository);
    const authUseCase = () => {};
    const authController = AuthController();

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