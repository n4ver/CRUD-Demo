const db = require('../../../models');
const Complaint = db.Complaint
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
   fastify.get('/', async (req, res) => {
    const complaints = await Complaint.findAll();
    return res.send({ complaints })
   }),
    //get one
    fastify.get('/:id', async (req, res) => {
        res.send({
            id: req.params.id,
            author: "John"
        })
    })
}

module.exports = routes