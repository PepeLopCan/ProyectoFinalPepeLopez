const { DataTypes } = require("sequelize");
const sequelize = require("./sequalize")

const pedido_producto = sequelize.define(
    "pedido_producto",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      productoId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pedidoId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },{
        timestamps: false,
        freezeTableName: true
      });
      
module.exports = pedido_producto;