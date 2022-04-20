const usuario = require("../models/usuarios");

const getAllUsers = async (res, req) => {
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
const getUser = async (res, req) => {
  try {
    const { id } = req.params;
    const miUsuario = usuario.findOne({
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
const updateUser = async (res, req = response) => {
  try {
    const { id } = req.params;
    const { nombre, email, password } = req.body;
    const arrayUsuario = await usuario.findOne({
      attributes: ["id", "name", "email", "password"],
      where: {
        id: id,
      },
    });

    if (usuario.lenght > 0) {
      arrayUsuario.forEach((usuario) => {
        usuario.update({
          nombre,
          email,
          password,
        });
      });
    }
    res.json({
      ok: true,
      msg: "Usuario actualizado",
      arrayUsuario,
    });
  } catch (error) {
    res.json({
      ok: false,
      msg: "Error",
    });
  }
};
const deleteUser = async (res, req) => {
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
const createUser = async (res, req) => {
  try {
    const { nombre, email, password } = req.body;
    let nuevoUsuario = await usuario.create({
      nombre: nombre,
      email: email,
      password: password,
    });

    if (nuevoUsuario) {
      res.json({
        ok: true,
        msg: "Usuario creado",
        nuevoUsuario,
      });
    }
  } catch (error) {
    res.json({
      ok: false,
      msg: "Ha ocurido un error",
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
