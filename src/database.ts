import { knex as setupKnex, Knex } from 'knex'

export const config: Knex.Config = {
  client: 'pg',
  connection: {
    database: 'fastify',
    host: 'localhost',
    password: 'postgres',
    port: parseInt(process.env.DB_PORT ?? '5433', 10),
    user: 'postgres',
  },
  migrations: {
    directory: 'src/migrations',
    extension: 'ts',
  },
}

export const knex = setupKnex(config)
