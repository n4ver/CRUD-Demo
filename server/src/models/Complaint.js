module.exports = (sequelize, DataTypes) => {
    const Complaint = sequelize.define('Complaint', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        author: DataTypes.INTEGER,
        title: DataTypes.STRING,
        category: DataTypes.ENUM('Safety', 'Personnel', 'Facility', 'Conduct'),
        status: DataTypes.ENUM("Solved", "Pending", "Closed"),
        text: DataTypes.STRING(1000),
        lastEdited: {
            type: DataTypes.DATETIME,
            defaultValue: DataTypes.NOW
        }
        //comments:
    })
}