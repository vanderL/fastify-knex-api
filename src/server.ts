import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'

const app = fastify()

app.get('/create', async () => {
  const transaction = await knex('transactions')
    .insert({
      id: crypto.randomUUID(),
      title: 'Transação de test',
      amount: 500,
    })
    .returning('*')

  return transaction
})

app.get('/get', async () => {
  const transaction = await knex('transactions').select('*')
  return transaction
})

app.get('/get/query', async () => {
  const transaction = await knex('transactions')
    .where('amount', 500)
    .select('*')
  return transaction
})

app
  .listen({
    port: 3002,
  })
  .then(() => {
    console.log('Http server running')
  })
