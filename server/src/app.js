const fastify = require('fastify');
const cors = require('@fastify/cors');

const build = () => {
    const app = fastify({ logger: true });

    //require('./routes')(app);

    app.register(require('./plugins/sequelizeConnector'));
    app.register(require('./routes/api'), { prefix: '/api/v1' });

    app.register(cors, {
        origin: '*',
        credentials: true
    });

    //hooks
    app.addHook('onClose', (instance, done) => {
        const { sequelize } = instance;
        sequelize.destroy(() => instance.log.info('Sequelize Instance Destroyed.'));
    })

    return app;
}

module.exports = {
    build
};