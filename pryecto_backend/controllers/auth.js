const usuario = require("../models/usuario");
const express = require("express");
const { bcrypt } = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const env = require("../helpers/auth");

const login = async (req, res) => {

    const { email,password} = req.body; 
    const userEmail = await usuario.findOne({ where: { email }}).catch((err)=>{
      console.log("Error ", error);
    })

    if (!userEmail)
    return res.json({message:"El email no existe"});

    if(userEmail.password !== password)
    return res.json({message:"La password no coincide"});
  
    const jwtToken = jwt.sign(
      { id: userEmail.id, email: userEmail.email },
      env.secret
    );
    res.json({ message: "Logueao!", token: jwtToken });
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
