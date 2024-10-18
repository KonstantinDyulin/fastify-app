import 'reflect-metadata'
import Fastify from 'fastify';
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';
import { authRoutes } from '@interface/routes/auth';
import { OrmDataSource } from '@infrastructure/database/typed-orm/dataSource';

const buildApp = async () => {
    const fastifyApp = Fastify();

    fastifyApp.setValidatorCompiler(validatorCompiler);
    fastifyApp.setSerializerCompiler(serializerCompiler);

    fastifyApp.register(authRoutes, { prefix: 'api/auth' });

    return fastifyApp;
}

const runApp = async () => {
    await OrmDataSource.initialize();

    const app = await buildApp();

    try {
        const port = await app.listen({ port: 8080 });
        console.log(`Server is running ${port}`);
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    }
}

await runApp();