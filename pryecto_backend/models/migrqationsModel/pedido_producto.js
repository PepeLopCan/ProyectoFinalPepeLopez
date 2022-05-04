'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pedido_producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pedido_producto.init({
    pedidoId: DataTypes.STRING,
    productoId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pedido_producto',
  });
  return pedido_producto;
};