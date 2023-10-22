module.exports = (sequelize, DataTypes) => {
    const Complaint = sequelize.define('Complaint', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        title: DataTypes.STRING,
        category: DataTypes.ENUM('Safety', 'Personnel', 'Facility', 'Conduct'),
        status: DataTypes.ENUM("Solved", "Pending", "Closed"),
        text: DataTypes.STRING(1000),
        //comments:
    })
    return Complaint;
}