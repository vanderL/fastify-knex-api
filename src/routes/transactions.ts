import crypto from 'node:crypto'
import { knex } from '../database'
import { FastifyInstance } from 'fastify'

export async function transactionsRoutes(app: FastifyInstance) {
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
}
