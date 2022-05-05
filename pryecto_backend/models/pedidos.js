const { DataTypes } = require("sequelize");
const sequelize = require("./sequalize")
const usuarios = require("../models/usuario");
const producto = require("../models/productos");

const pedidos = sequelize.define("pedidos",{
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },{
        timestamps: false,
        freezeTableName: true
      });


      //pedidos.belongsTo(usuarios,{foreignKey: "usuarioId", as: "usuarios"});
module.exports = pedidos;