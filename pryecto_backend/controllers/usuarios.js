const { response } = require("express");
const usuario = require("../models/usuario")
const pedido = require("../models/pedidos");
const bcrypt = require('bcrypt');
const multer = require('multer'); 
const asociacion = require('../models/asociaciones');

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
    let {nombre,email,password,rol} = req.body;

    const existeEmail = await usuario.findOne({where: {email}});

    if (existeEmail) {
      return res.status(400).json({
        ok: false,
        msg: "El nombre o el correo ya existen",
      });
    }
   
    const salt = bcrypt.genSaltSync();
    password = bcrypt.hashSync(password, salt);

    const crearUser = await usuario.create({
      nombre:nombre,
      email: email,
      password:password,
      imagen: req.file.filename,
      rol:rol
    });

    res.json({
      ok: true,
      crearUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'public/images/usuarios')
  },
  filename: function (req, file, cb) {
      const mimeExtension = {
          'image/jpeg': '.jpeg',
          'image/jpg': '.jpg',
          'image/png': '.png',
          'image/gif': '.gif',
      }
      cb(null, file.fieldname + '-' + Date.now() + mimeExtension[file.mimetype]);
  }
})
const uploadAvatar = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
      console.log(file.mimetype)
      if(file.mimetype === 'image/jpeg' || 
      file.mimetype === 'image/jpg' || 
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/gif') {
          cb(null, true);
      } else {
          cb(null, false);
          req.fileError = 'File format is not valid';
      }
  }
})


const mostrarPedidos = async (req, res) => {

  const idUsuario = req.params;
  console.log(idUsuario);
  const data = await pedido.findAll({
  
    where: { usuarioId:idUsuario.id}
  })

  res.status(200).send(data)
}






module.exports = {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  createUser,
  uploadAvatar,
  mostrarPedidos
  
  
};
