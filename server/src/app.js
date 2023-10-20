const fastify = require('fastify');
const cors = require('cors');
const urls = ['localhost'];

const build = () => {
    const app = fastify({ logger: true });

    //require('./routes')(app);
    return app;
}

module.exports = {
    build
};