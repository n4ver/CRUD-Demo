module.exports = (sequelize, DataTypes) => {
    const Complaint = sequelize.define('Complaint', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        author: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
            },
            foreignKey: true
        },
        title: DataTypes.STRING,
        category: DataTypes.ENUM('Safety', 'Personnel', 'Facility', 'Conduct'),
        status: DataTypes.ENUM("Solved", "Pending", "Closed"),
        text: DataTypes.STRING(1000),
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
        //comments:
    })
    Complaint.associate = function (models) {
        Complaint.belongsTo(models.User, { foreignKey: author });
        Complaint.hasMany(models.Comment, { foreignKey: parent_id });
    };
    return Complaint;
}