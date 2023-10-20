const oas = require('fastify-swagger');

const apiRoutes = async (app, options) => {
    app.register(oas, require('../docs'));
    app.register(require('./complaints'), { prefic: 'complaints'});
    app.register(require('./comments'), { prefix: 'comments'});
    app.register(require('./users'), { prefix: 'users'});
    app.get('/', async (req, rep) => {
        return { hello: 'world' };
    });
};

module.exports = apiRoutes;