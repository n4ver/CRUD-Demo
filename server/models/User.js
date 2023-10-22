const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt'));

function hashPassword (user, options) {
    const SALT_FACTOR = 8;

    if (!user.changed('password')) {
        return
    }

    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashAsync(user.password, salt, null))
        .then(hash => {
            user.setDataValue('password', hash)
        })
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING,
        is_admin: DataTypes.BOOLEAN
    }, {
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword,
            beforeSave: hashPassword
        }
    })

    User.prototype.comparePassword = function (password) {
        return bcrypt.compareAsync(password, this.password)
    }
    User.associate = function (models) {
        User.hasMany(models.Complaint, {foreignKey: 'author'});
        User.hasMany(models.Comment, {foreignKey: 'author'});
    };
    return User;
}