module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        parent_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        author: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        text: DataTypes.STRING(1000),
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    })

    return Comment;
}