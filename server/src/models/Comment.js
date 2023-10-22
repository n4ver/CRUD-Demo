module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        parent_id: {
            type: DataTypes.UUID,
            references: {
                model: 'Complaints',
                key: 'id'
            },
            foreignKey: true
        },
        author: {
            type: DataTypes.UUID,
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