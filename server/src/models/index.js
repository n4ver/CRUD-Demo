const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const { DB } = require('../config/environment');
const db = {};

const sequelize = new Sequelize(
    DB.DB_NAME,
    DB.DB_USER,
    DB.DB_PASSWORD,
    DB.OPTIONS
)

fs
    .readdirSync(__dirname)
    .filter((file) => 
        file !== 'index.js'
    )
    .forEach((file) => {
        const model = sequelize.import(path.join(__dirname, file))
        db[model.name] = model
    })

Object.keys(db).forEach(function (modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db)
    }
})

db.sequelize = sequelize;
db.Sequelize = sequelize;

module.exports = db;