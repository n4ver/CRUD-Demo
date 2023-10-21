/*
const complaintService = require('../../../services/products');
const {
    createSchema,
    getAllSchema,
    getOneSchema,
    updateSchema,
    deleteSchema
} = require('./schemas');
*/
async function routes(fastify, options) {
    /*
    //create
    fastify.post('/', {schema: createSchema }, async (req, res) => {
        const { body } = req;

        const insertedId = await complaintService.create({ complaint: body});
        app.log.info('insertedID', insertedId);
        return {_id: insertedId};
    })
    */
    //get one
    fastify.get('/:id', async (req, res) => {
        res.send({
            id: req.params.id,
            author: "John"
        })
    })
}

module.exports = routes