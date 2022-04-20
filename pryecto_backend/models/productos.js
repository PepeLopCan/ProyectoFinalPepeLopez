const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const producto = Sequelize.define("productos", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: Sequelize.TEXT,
    },
    descripcion: {
      type: Sequelize.TEXT,
    },
    estado: {
      type: Sequelize.BOOLEAN,
    },
    valoracion: {
      type: Sequelize.NUMBER,
    },
    precio: {
      type: Sequelize.NUMBER,
    },
    usuarioId: {
      type: Sequelize.INTEGER,
    },
  });

  producto.associate = (models) => {
    producto.belongsToMany(models.usuario, {
      through: "relacion",
      as: "usuarios",
      foreignKey: "productoId",
    });
  };
};
