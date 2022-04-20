const usuario = require("../models/usuarios");
const express = require("express");
const { bcrypt } = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const env = require("../helpers/auth");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    usuario
      .findOne({
        where: {
          email: email,
        },
      })
      .then((usuario) => {
        if (!usuario) {
          res.status(404).json({ msg: "Usuario no encontrado" });
        } else {
          if (bcrypt.compareSync(password, usuario.password)) {
            let token = jwt.sign({ usuario: usuario }, env.secret, {
              expiresIn: env.expires,
            });
            res.json({
              ok: true,
              usuario: usuario,
              token: token,
            });
          } else {
            res.status(401).json({ msg: "Contraseña incorrecta" });
          }
        }
      });
  } catch (error) {
    res.status(500).json(error);
  }
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
