'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Producto.associate = function (models) { 
        Producto.belongsToMany(models.User, { through: 'user_products', as: 'user' }); 
    }
    }
  }
  Producto.init({
    id:DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    precio: DataTypes.NUMBER,
    cantidad: DataTypes.NUMBER,
    inventario: DataTypes.STRING,
    categoria: DataTypes.STRING,
    imagen: DataTypes.STRING,
    rating: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'productos',
  });
  return Producto;
};