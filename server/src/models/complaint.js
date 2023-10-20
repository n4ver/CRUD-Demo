module.exports = (sequelize, DataTypes) => {
    const Complaint = sequelize.define('Complaint', {
        title: DataTypes.STRING,
    })
}