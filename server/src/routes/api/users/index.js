async function routes(fastify, options) {
    fastify.get('/:id', async (req, res) => {
        res.send({
            id: req.params.id,
            username:"John"
        })
    })
}

module.exports = routes