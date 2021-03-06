const usuario = require("../models/usuario");
const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const router = express.Router();
const env = require("../helpers/auth");

const login = async (req, res = respone) => {

    const { email,password } = req.body; 
    
    const userEmail = await usuario.findOne({ where: {email:email}}).catch((err)=>{
      console.log("Error ", error);
    })
    if (!userEmail) {
      return res.status(404).json({
        ok: false,
        msg: "Email no valido",
      });
    }

       const Validapassword = bcrypt.compareSync(password, userEmail.password);

      if (!Validapassword) {
        return res.status(404).json({
          ok: false,
          msg: "Contraseña no valida",
        });
      } 
  
    const jwtToken = jwt.sign(
      { id: userEmail.id, email: userEmail.email },
      env.secret
    );
    res.json({ message: "Logueao!", token: jwtToken ,userEmail}); 
};

const register = async (req, res) => {
  try {
    let password = bcrypt.hashSync(req.body.password, env.rounds); //Number.parseInt()
    usuario
      .create({
        nombre: req.body.nombre,
        email: req.body.email,
        password: password,
      })
      .then((usuario) => {
        let token = jwt.sign({ usuario: usuario }, env.secret, {
          expiresIn: env.expires,
        });
        res.json({
          usuario: usuario,
          token: token,
        });
      });
  } catch (error) {
    res.json({
      ok: false,
      msg: "Error",
    });
  }
};

module.exports = {
  login,
  register,
};
