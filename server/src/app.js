const fastify = require('fastify');
const urls = ['localhost'];

const build = () => {
    const app = fastify({ logger: true });

    //require('./routes')(app);

    app.register(require('./plugins/'));
    app.register(require('./routes/api'), { prefix: 'api' });

    //hooks
    fastify.addHook('onClose', (instance, done) => {
        const { sequelize } = instance;
    })

    return app;
}

module.exports = {
    build
};