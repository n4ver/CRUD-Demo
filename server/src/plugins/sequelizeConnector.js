const Sequelize = require('sequelize');
const fastifyPlugin = require('fastify-plugin');
const { DB } = require('../config/environment');

const sequelizeConnector = async (server) => {
    const sequelize = new Sequelize(
        DB.DB_NAME,
        DB.DB_USER,
        DB.DB_PASSWORD,
        DB.OPTIONS
    )
    server.decorate('sequelize', sequelize);
}

// const mysqlURL = `mysql://${DB.DB_USER}:${DB.OPTIONS.host}/${DB.OPTIONS.dialect}`;

module.exports = fastifyPlugin(sequelizeConnector);