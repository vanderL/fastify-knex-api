import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'hello world'
})

app
  .listen({
    port: 3002,
  })
  .then(() => {
    console.log('Http server running')
  })
