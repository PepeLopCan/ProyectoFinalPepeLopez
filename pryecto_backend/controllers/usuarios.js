const { response } = require("express");
const usuario = require("../models/usuario")
const bcrypt = require('bcrypt');

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await usuario.findAll();
    res.json({
      ok: true,
      allUsers,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const miUsuario = await usuario.findOne({
      where: {
        id: id,
      },
    });
    res.json({
      ok: true,
      miUsuario,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};
const updateUser = async (req, res = response) => {
  try {
    const { id } = req.params;
    const usuarioUpdate = req.body;
    await usuario.update({
     nombre: usuarioUpdate.nombre,
     email: usuarioUpdate.email,
     password: usuarioUpdate.password,
    },
    {
        where: {
            id: id
        }
    });
    res.json({
      ok: true,
      msg: "Usuario actualizado",
      usuarioUpdate,
    });
  } catch (error) {
    res.json({
      ok: false,
      msg: "Error",
    });
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await usuario.destroy({
      where: {
        id: id,
      },
    });
    res.json({
      ok: true,
      msg: "Usuario eliminado",
      deleteUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};
const createUser = async (req, res) => {
  try {
    const {nombre,email,password} = req.body;

    const existeEmail = await usuario.findOne({where: {email}});

    if (existeEmail) {
      return res.status(400).json({
        ok: false,
        msg: "El nombre o el correo ya existen",
      });
    }
    const miUsuario = new usuario(req.body);

    const salt = bcrypt.genSaltSync();
    miUsuario.password = bcrypt.hashSync(password, salt);

    miUsuario.save();

    res.json({
      ok: true,
      miUsuario,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};

module.exports = {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  createUser,
};
