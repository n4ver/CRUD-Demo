const fastify = require('fastify');
const cors = require('@fastify/cors');
const db = require('./models');

const build = () => {
    const app = fastify({ logger: true });

    //require('./routes')(app);

    app.register(require('./routes/api'), { prefix: '/api/v1' });

    app.register(cors, {
        origin: true
    });

    db.sequelize.sync();
    // db.sequelize.sync({ force: true }); // remove force later

    //hooks
    app.addHook('onClose', (instance, done) => {
        db.sequelize.close(() => instance.log.info('Sequelize Instance Destroyed.'));
    })

    return app;
}

module.exports = {
    build
};