module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        text: DataTypes.STRING(1000),
    })
    return Comment;
}