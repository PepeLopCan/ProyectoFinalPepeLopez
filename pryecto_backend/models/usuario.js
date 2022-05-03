
const {DataTypes}= require('sequelize');
const sequelize = require('./sequalize');

  const usuario = sequelize.define("usuarios", {
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
    },
  },{
    timestamps: false,
    freezeTableName: true
  });

  usuario.associate = function (models) { 
    usuario.belongsToMany(models.producto, { through: 'user_products', as: 'producto' }); 
}

  module.exports= usuario;

 