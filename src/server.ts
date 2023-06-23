import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()

app.register(transactionsRoutes)

app
  .listen({
    port: parseInt(env.PORT),
  })
  .then(() => {
    console.log('Http server running')
  })
