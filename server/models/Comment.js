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
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    })
    Comment.associate = function (models) {
        Comment.belongsTo(models.Complaint, {foreignKey: parent_id});
        Comment.belongsTo(models.User, {foreignKey: author});
    };
    return Comment;
}