const { DataTypes } = require("sequelize");
const sequelize = require("./sequalize")
const usuario = require("../models/usuario");
const producto = require("../models/productos");

const pedido = sequelize.define("pedidos",{
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
        usuarioId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },{
        timestamps: false,
        freezeTableName: true
      });

      //pedido.belongsToMany(producto,{ through:'pedido_producto', as:"pedidoId" });
  
      pedido.belongsTo(usuario,{
        foreignKey: "id",
        as: "usuario",
      });
module.exports = pedido;