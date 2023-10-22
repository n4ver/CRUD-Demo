'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Associations
//Complaint.hasMany(Comment); // A complaint has many comments
//Comment.belongsTo(Complaint); // A comment belongs to a complaint

//User.HasMany(Complaint); // A User has many complaints
//Complaint.belongsTo(User); // A complaint has one user

//User.HasMany(Comment); // A user makes many comments
//Comment.belongsTo(User); // A Comment belongs to a user
db.Complaint.hasMany(db.Comment);
db.Comment.belongsTo(db.Complaint);

db.User.hasMany(db.Complaint);
db.Complaint.belongsTo(db.User);

db.User.hasMany(db.Comment);
db.Comment.belongsTo(db.User);

module.exports = db;
