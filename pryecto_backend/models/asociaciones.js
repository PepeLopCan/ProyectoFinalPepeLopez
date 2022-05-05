const usuarios = require("./usuario");
const pedidos = require('./pedidos');

  usuarios.hasMany(pedidos,{foreignKey: "usuarioId",as:'pedido_relacion'}); 
  pedidos.belongsTo(usuarios,{foreignKey: "usuarioId", as: "usuario_relacion"});

module.exports 
    