import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { newAuthController } from '@interface/controllers/auth';
import { RegisterDTO } from '@interface/dto/auth/register';
import { UserRepository } from '@infrastructure/repositories/typed-orm/UserRepository';

export const authRoutes: FastifyPluginAsyncZod = async (fastifyInstance: FastifyInstance, options: FastifyPluginOptions) => {
    const userRepository = new UserRepository();
    const authController = newAuthController(userRepository);

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