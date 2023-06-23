import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

export const config: Knex.Config = {
  client: 'pg',
  connection: {
    database: env.DB_DATABASE,
    host: env.DB_HOST,
    password: env.DB_PASSWORD,
    port: parseInt(env.DB_PORT),
    user: env.DB_USERNAME,
  },
  migrations: {
    directory: 'src/migrations',
    extension: 'ts',
  },
}

export const knex = setupKnex(config)
