import 'reflect-metadata';
import { DataSource } from 'typeorm';

/* eslint-disable import/prefer-default-export */
export const PostgresDataSource = new DataSource({
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'admin',
    password: 'admin@postgres',
    database: 'psc_center',
    synchronize: true,
    logging: true,
    extra: { connectionLimit: 100 },
    cache: {
        type: 'database',
        tableName: 'query-result-cache'
    },
    entities: ['src/entity/**/*.ts'],
    migrations: [],
   
});