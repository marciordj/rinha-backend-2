import {knex as setupKnex, Knex} from 'knex';

export const config: Knex.Config = {
  client: 'pg',
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    database: 'rinha',
    password: 'docker',
  },
  migrations: {
    extension: 'ts',
    directory: './database/migrations'
  }
};

export const knex = setupKnex(config);
