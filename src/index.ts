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
    const app = await buildApp();

    try {
        await OrmDataSource.initialize();
        console.log('Data source has been initialized');
    } catch (error) {
        console.log("Error during Data Source initialization", error)
    }

    try {
        const port = await app.listen({ port: 8080 });
        console.log(`Server is running ${port}`);
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    }
}

await runApp();