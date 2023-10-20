const fastify = require('fastify');
const { sequelize } = require('./models');
const urls = ['localhost'];

const build = () => {
    const app = fastify({ logger: true });

    //require('./routes')(app);

    sequelize.sync({ force: false });

    return app;
}

module.exports = {
    build
};