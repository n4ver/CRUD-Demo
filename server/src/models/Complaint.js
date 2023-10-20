module.exports = (sequelize, DataTypes) => {
    const Complaint = sequelize.define('Complaint', {
        uuid: DataTypes.UUID,
        author: DataTypes.UUID,
        title: DataTypes.STRING,
        category: DataTypes.ENUM('Safety', 'Personnel', 'Facility', 'Conduct'),
        status: DataTypes.ENUM("Solved", "Pending", "Closed"),
        text: DataTypes.STRING(500),
        lastEdited: DataTypes.DATE
        //comments:
    })
}