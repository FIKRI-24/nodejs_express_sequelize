module.exports = (sequelize, DataTypes) => { 
    const Product = sequelize.define("product", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement: true
        },
        
        title : {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        },
        published: {
            type: DataTypes.BOOLEAN,
            defaultValue: false // Tambahkan default value untuk published
        }
    });

    return Product;
};
