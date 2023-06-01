import { knex as setupKnex } from 'knex'

export const knex = setupKnex({
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
    extension: 'js',
  },
})
