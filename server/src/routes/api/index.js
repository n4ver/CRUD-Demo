const apiRoutes = async (app, options) => {
    app.register(require('./complaints'), { prefix: 'complaints' });
    app.register(require('./comments'), { prefix: 'comments' });
    app.register(require('./users'), { prefix: 'users' });
    app.register(require('./login'), { prefix: 'login' });
    app.register(require('./register'), { prefix: 'register' });
    app.get('/', async (req, rep) => {
        return { hello: 'world' };
    });
};

module.exports = apiRoutes;
