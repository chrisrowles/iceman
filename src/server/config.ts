import { config } from 'dotenv';
import type { Configuration } from './interfaces/Configuration';

config({
    debug: process.env.DEBUG ? true : false
});

export const settings: Configuration = {
    app: {
        url: process.env.APP_URL ?? '',
        port: process.env.PORT ?? 3000,
        secret: process.env.APP_SECRET ?? '',
        storage: process.env.JSON_STORAGE ?? '',
        sources: {
            wiki: process.env.TARKOV_WIKI_URL ?? 'https://escapefromtarkov.fandom.com/wiki'
        }
    },
    docs: {
        port: process.env.DOCS_PORT ?? 3001,
        schema: process.env.API_SCHEMA ?? 'swagger.json'
    },
    mongo: {
        cluster: process.env.MONGO_CLUSTER ?? '',
        user: process.env.MONGO_USER ?? '',
        password: process.env.MONGO_PASSWORD ?? '',
        database: process.env.MONGO_DATABASE ?? ''
    },
};