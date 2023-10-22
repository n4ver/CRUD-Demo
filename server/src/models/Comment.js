module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        parent_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Complaints',
                key: 'id'
            },
            foreignKey: true
        },
        author: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
            },
            foreignKey: true
        },
        text: DataTypes.STRING(1000),
    })
    return Comment;
}