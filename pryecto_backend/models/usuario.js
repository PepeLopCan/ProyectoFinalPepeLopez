
const {DataTypes}= require('sequelize');
const sequelize = require('./sequalize');
const pedidos = require('./pedidos');

  const usuarios = sequelize.define("usuarios", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    rol: {
      type: DataTypes.STRING,
       defaultValue: "USER_ROLE",
    },
    imagen: {
      type: DataTypes.STRING,
    }
  },{
    timestamps: false,
    freezeTableName: true
  });

  //usuarios.hasMany(pedidos,{foreignKey: "usuarioId",as:'pedido'}); 
  module.exports= usuarios;

 