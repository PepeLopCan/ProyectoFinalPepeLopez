
require('dotenv').config();
const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
const sequelize = require('../pryecto_backend/models/sequalize');



const app = express();

const PORT = process.env.PORT;

app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(morgan("dev"));
app.use(express.json ());

const pedidos = require('./routes/pedidos')


app.use("/api/usuarios",require("./routes/users"));
app.use("/api/productos",require("./routes/productos"));
app.use("/api/pedido",pedidos);
app.use("/api/auth",require("./routes/auth"));
app.use('/public/images/productos',express.static('public/images/productos'));


//Conexion

app.listen(PORT, function () {
  console.log("la app ha arrancado");
});

/* sequelize.sync({ force: false }).then(() => {
  console.log("Nos hemos conectado a la base de datos");
}).catch(error => {
  console.log('Se ha producido un error', error);
}) */




