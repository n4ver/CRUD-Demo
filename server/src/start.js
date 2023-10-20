const { build } = require('./app');
const { APP_PORT } = require('./config/environment');

build()
    .then((app) => {
        app.listen({ port: APP_PORT }, function (err, address) {
            if (err) {
                app.log.error(err);
                process.exit(1);
            }
            console.log('hi');
            app.log.info(`server listening on ${address}`);

            process.on('SIGINT', () => app.close());
            process.on('SIGTERM', () => app.close());
        });
    });