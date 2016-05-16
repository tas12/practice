const Hapi = require('hapi')
const Inert = require('inert')
const path = require('path')

const server = new Hapi.Server()

server.connection({port: 3000})

server.register(Inert, (err) => {
  if (err) throw err

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: (request, reply) => {
      const index = path.join(__dirname, '..', '..', '..', 'public', 'index.html')
      console.log(index);
      reply.file(index)
    }
  })

  server.route({
    path: '/{filename}.js',
    method: 'GET',
    handler: (req, reply) => {
      const js = path.join(__dirname, '..', '..', '..', 'public', req.path)
      reply.file(js)
    }
  })
})

server.start((err) => {
  if (err) throw err

console.log('server running at:', server.info.uri)
})
