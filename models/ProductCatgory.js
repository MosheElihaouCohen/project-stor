module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('ProductCategory', {
        productId: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        categoyId : {
            allowNull: false,
            type: DataTypes.INTEGER
        },
       
    })

    Product.associate = (models) => {
        Product.hasMany(models.ProductImages, {
            foreignKey: 'productId',
            as: 'images'
        });
    };

    return Product;
}