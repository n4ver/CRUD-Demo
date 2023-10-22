const Sequelize = require('sequelize');
const { DB } = require('../config/environment');
const db = {};

const sequelize = new Sequelize(
    DB.DB_NAME,
    DB.DB_USER,
    DB.DB_PASSWORD,
    DB.OPTIONS
);

const Comment = require('./Comment')(sequelize, Sequelize.DataTypes);
const Complaint = require('./Complaint')(sequelize, Sequelize.DataTypes);
const User = require('./User')(sequelize, Sequelize.DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db[Comment.name] = Comment;
db[Complaint.name] = Complaint;
db[User.name] = User;


module.exports = db;