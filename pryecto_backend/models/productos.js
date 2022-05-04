
const {DataTypes}= require('sequelize');
const sequelize = require('../models/sequalize');
const pedido = require('../models/pedidos');

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
      type: DataTypes.NUMBER
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
//producto.belongsToMany(pedido, { through: 'pedido_producto', as: 'productoId' }); 

module.exports = producto;
 