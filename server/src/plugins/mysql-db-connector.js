const Sequelize = require('sequelize');
const { DB } = require('../config/environment');
/*
const sequelize = new Sequelize(
    DB.DB_NAME,
    DB.DB_USER,
    DB.DB_PASSWORD,
    DB.OPTIONS
)
*/
const mysqlURL = `mysql://${DB.DB_USER}:${DB.OPTIONS.host}/${DB.OPTIONS.dialect}`

const mysqlConnector = app => {
    app.register(require('@fastify/mysql'), {
        forceClose: true,
        uri: mysqlURL
    });
};

module.exports = mysqlConnector;