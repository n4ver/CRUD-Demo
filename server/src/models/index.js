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

//Complaint.hasMany(Comment); // A complaint has many comments
//Comment.belongsTo(Complaint); // A comment belongs to a complaint

//User.HasMany(Complaint); // A User has many complaints
//Complaint.belongsTo(User); // A complaint has one user

//User.HasMany(Comment); // A user makes many comments
//Comment.belongsTo(User); // A Comment belongs to a user

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db[Comment.name] = Comment;
db[Complaint.name] = Complaint;
db[User.name] = User;


module.exports = db;