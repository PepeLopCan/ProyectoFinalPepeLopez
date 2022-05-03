const { DataTypes } = require("sequelize");
const sequelize = require("./sequalize");

const usuario = sequelize.define(
  "user_products",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
      allowNull: false,
    },
    productoId: {
      type: DataTypes.INTEGER,
      references: {
        model: "productos",
        key: "id",
      },
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = usuario;


