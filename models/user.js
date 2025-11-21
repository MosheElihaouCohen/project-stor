module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
         id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING
        },
        email:{
           type: DataTypes.STRING
        },
        token:{
           type: DataTypes.STRING
        }
    })
    return User;
}