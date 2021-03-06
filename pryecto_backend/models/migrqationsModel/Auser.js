'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  User.init({
    id:DataTypes.STRING,
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    rol: DataTypes.STRING,
    imagen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return User;
};