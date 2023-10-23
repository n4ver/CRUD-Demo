const { User } = require('../../../models')
const jwt = require('jsonwebtoken')
const { DB } = require('../../../config/environment')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, DB.AUTHENTICATION.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}
async function routes(fastify, options) {
    //create
    fastify.post('/', async (req, res) => {
        try {
            const user = await User.create(req.body)
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err) {
            res.status(400).send({
                error: 'This email account is already in use.'
            })
        }
    })
}

module.exports = routes