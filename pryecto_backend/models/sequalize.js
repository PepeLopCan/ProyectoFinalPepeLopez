const Sequelize = require('sequelize');


const sequelize = new Sequelize("tienda", "pepe", "123456", {
    host: "localhost",
    dialect: "postgres",
  });

  sequelize
  .authenticate()
  .then(() => {
    console.log("CONECTADO A LA BBDD" + ", En el puerto ");
  })
  .catch((error) => {
    console.log("Se ha producido un error", error);
  });


module.exports =sequelize;