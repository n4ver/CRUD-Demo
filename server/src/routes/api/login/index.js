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
    
    fastify.post('/', async (req, res) => {
        try {
          const { username, password } = req.body
            const user = await User.findOne({
              where: {
                username: username
              }
            })
            if (!user) {
                console.log('No user')
                return res.status(403).send({
                    error: 'The login information was incorrect'
              })
            }
            const isPasswordValid = await user.comparePassword(password)
            if (!isPasswordValid) {
              return res.status(403).send({
                error: 'The login information was incorrect'
              })
            }
            const userJson = user.toJSON()
            res.send({
              user: userJson,
              token: jwtSignUser(userJson)
            })
          } catch (err) {
            console.log(err)
            res.status(500).send({
              error: 'An error has occured trying to log in'
            })
          }
    })
}

module.exports = routes