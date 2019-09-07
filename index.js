const mjml = require('mjml')
const app = require('fastify')({
    logger: true
})
const peekaboo = require('fastify-peekaboo')
const metricsPlugin = require('fastify-metrics');

app.register(metricsPlugin, {
    endpoint: '/metrics'
})

app.register(peekaboo, {
    matches: [
        {
            request: {
                methods: '*',
                route: '/'
            }
        }
    ],
    storage: {
        mode: 'fs',
        config: {
            path: 'cache'
        }
    },
    expire: 5 * 1000,
    xheader: true
})

app.post('/', async (request, reply) => {

    let result = mjml(request.body.mjml);

    reply.send(result)
})

app.listen(process.env.PORT || 3000, process.env.ADDRESS || '0.0.0.0', (err, address) => {
    if (err) throw err
    app.log.info(`Server listening on ${address}`)
})
