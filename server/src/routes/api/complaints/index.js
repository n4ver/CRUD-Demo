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
    //create
    fastify.post('/', async (req, res) => {
        const { body } = req;
        const complaint = Complaint.create({ body });
        console.log('Complaint Submitted. ID:', complaint.id);
    }),
   //get all
   fastify.get('/', async (req, res) => {
    const complaints = await Complaint.findAll();
    return res.send({ complaints })
   }),
    //get one
    fastify.get('/:id', async (req, res) => {
        const { id } = req.params;
        const complaint = await Complaint.findByPk(id);
        return res.send({ complaint });
    })
}

module.exports = routes