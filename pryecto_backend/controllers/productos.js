const { response } = require("express");
const producto = require("../models/productos");
const multer = require('multer');

const getAllProductos = async (req, res) => {
  try {
    const AllProducts = await producto.findAll()
    res.json({
      ok: true,
      AllProducts,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: error,
    });
  }
};
const getProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const miProducto = await producto.findOne({
      where: {
        id: id,
      },
    });
    res.json({
      ok: true,
      miProducto,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};
const updateProducto = async (req, res) => {
  try {
    const id = req.body.id;

    const productoUpdate = req.body;
    await producto.update({
      nombre: productoUpdate.nombre
      , descripcion: productoUpdate.descripcion
      , precio: productoUpdate.precio
      , cantidad: productoUpdate.cantidad
      , inventario: productoUpdate.inventario
      , categoria: productoUpdate.categoria
      , rating: productoUpdate.rating
    },
      {
        where: {
          id: id
        }
      });
    res.json({
      ok: true,
      msg: "Producto actualizado",
      productoUpdate,
    });
  } catch (error) {
    res.json({
      ok: false,
      msg: "Error",
    });
  }
};
const deleteProducto = async (req, res) => {
  try {
    const { id } = req.body;
    const deleteProducto = await producto.destroy({
      where: {
        id: id,
      },
    });
    res.json({
      ok: true,
      msg: "Producto eliminado",
      deleteProducto,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};




const uploadImage = async (req, res) => {
   multer({
    destination: function (req, file, cb) {
      cb(null, 'public/images/productos')
    },
    filename: function (req, file, cb) {
      const mimeExtension = {
        'image/jpeg': '.jpeg',
        'image/jpg': '.jpg',
        'image/png': '.png',
        'image/gif': '.gif',
      }
      var extension = file.originalname.slice(file.originalname.lastIndexOf('.') + mimeExtension);
      cb(null,Date.now() + extension);
    }
  }).single('imagen');
  const file = req.file;
  const id = req.params.id;
  console.log(file) 
  if (file) {
    await producto.update({ imagen: file.filename }, {
      where: {
        id: id
      }
    })
    res.json('Imagen subida con exito')
  } else {
    throw new Error('Archivo no subido')
  }

};

 
const createProducto = async (req, res) => {
  try {
    const body = req.body;

    let nuevoProducto = await producto.create(
      {
        nombre: body.nombre,
        descripcion: body.descripcion,
        precio: body.precio,
        inventario: body.inventario,
        categoria: body.categoria,
        imagen:'',
        rating: body.rating,
      },
    );
    res.json({
      ok: true,
      msg: "Producto creado",
      nuevoProducto
    });

  } catch (error) {
    console.log(error);
    res.status(500).json('Error al crear producto ' + error)

  }
};


 const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/productos')
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

/* const uploadAvatar = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {

    if (file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/gif') {
      cb(null, true);
    } else {
      cb(null, false);
      req.fileError = 'File format is not valid';
    }
  }
})   */

/* 
var aa = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/productos')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
 */

 
var upload = multer({ storage: storage })

module.exports = {
  getAllProductos,
  getProducto,
  updateProducto,
  deleteProducto,
  createProducto,
  uploadImage,
  upload
};
