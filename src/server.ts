import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/hello', async () => {
  const tableTest = await knex('teste').select('*')

  return tableTest
})

app
  .listen({
    port: 3002,
  })
  .then(() => {
    console.log('Http server running')
  })
