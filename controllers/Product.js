const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/database");

const showProducts = (request, response) =>{
    response.write('This is products page!');
    response.end();
}



/*module.exports = {
    showProducts
}*/

module.exports = (sequelize,DataTypes) => {
    const Product = sequelize.define('Prodect',{
        id:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER
        },
        name:{
            allowNull:false,
            type:DataTypes.STRING
        },
          description:{
            type:DataTypes.TEXT
          },
        price:{
            allowNull:null,
             type:DataTypes.STRING
        }
    })
    return Product;
}