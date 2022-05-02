const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const usuarios = Sequelize.define("usuarios", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: Sequelize.TEXT,
    },
    email: {
      type: Sequelize.TEXT,
    },
    password: {
      type: Sequelize.TEXT,
    },
    rol: {
      type: Sequelize.TEXT,
    },
    imagen: {
      type: Sequelize.TEXT,
    },
  });

  usuarios.associate = (models) => {
    usuarios.belongsToMany(models.Groups, {
      through: "user_product",
      as: "productos",
      foreignKey: "userId",
    });
  };
};
