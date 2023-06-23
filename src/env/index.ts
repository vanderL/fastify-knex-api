import 'dotenv/config'
import { z } from 'zod'

// ENVIRONMENT="local"
// DB_HOST="localhost"
// DB_USERNAME="postgres"
// DB_PASSWORD="postgres"
// DB_DATABASE="fastify"
// DB_PORT=5433
// DB_LOGGING=true
// PORT=8000

const envSchema = z.object({
  ENVIRONMENT: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  DB_HOST: z.string(),
  DB_USERNAME: z.string(),
  DB_PASSWORD: z.string(),
  DB_DATABASE: z.string(),
  DB_PORT: z.string().default('5433'),
  DB_LOGGING: z.string(),
  PORT: z.string().default('3002'),
})

export const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('😪 invalid environment variables!', _env.error.format())

  throw new Error('Invalid environment variables.')
}

export const env = _env.data
