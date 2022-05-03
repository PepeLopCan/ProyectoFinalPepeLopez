
require('dotenv').config();
const express = require("express");
const morgan = require("morgan");
const cors = require('cors');



const app = express();

const PORT = process.env.PORT;

app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(morgan("dev"));
app.use(express.json ());



app.use("/api/usuarios",require("./routes/users"));
app.use("/api/productos",require("./routes/productos"));
app.use("/api/auth",require("./routes/auth"));


//Conexion

app.listen(PORT, function () {
  console.log("la app ha arrancado");
});



