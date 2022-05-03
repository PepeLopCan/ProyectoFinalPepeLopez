
const {DataTypes}= require('sequelize');
const sequelize = require('../models/sequalize');

  const producto = sequelize.define("productos", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
    precio: {
      type: DataTypes.NUMBER,
    },
     cantidad:{
      type: DataTypes.STRING
    },
     inventario: {
      type: DataTypes.STRING,
    },
    categoria:{
      type: DataTypes.STRING
    },
    imagen: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.NUMBER,
    },
    
  },{
    timestamps: false,
    freezeTableName: true
  });
  producto.associate = function (models) { 
    producto.belongsToMany(models.User, { through: 'user_products', as: 'user' }); 
}
module.exports = producto;
 