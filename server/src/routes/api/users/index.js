async function routes(fastify, options) {
    //create
    fastify.post('/', async (req, res) => {
        const { body } = req;
        const user = User.create({ body });
        console.log('Complaint Submitted. ID:', user.id);
    }),
   //get all
   fastify.get('/', async (req, res) => {
    const users = await User.findAll();
    return res.send({ users })
   }),
    //get one
    fastify.get('/:id', async (req, res) => {
        const { id } = req.params;
        const Users = await Users.findByPk(id);
        return res.send({ user });
    })
}

module.exports = routes