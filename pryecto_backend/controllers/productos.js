const { response } = require("express");
const producto  = require("../models/productos");

const getAllProductos = async (req, res) => {
     try {
    const AllProducts = await producto.findAll()
    res.json({
      ok: true,
      AllProducts,
    });
  } catch(error) {
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
    const { id } = req.params;
    const productoUpdate = req.body;
    await producto.update({
      nombre:productoUpdate.nombre
      ,descripcion:productoUpdate.descripcion
      ,precio:productoUpdate.precio
      ,cantidad: productoUpdate.cantidad
      ,inventario: productoUpdate.inventario
      ,categoria: productoUpdate.categoria
      ,imagen: productoUpdate.imagen
      ,rating: productoUpdate.rating
    },
    {
      where: {
          id: id
      }
  });
    res.json({
      ok: true,
      msg: "Usuario actualizado",
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
    const { id } = req.params;
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
const createProducto = async (req, res) => {
  try {
    const { nombre, descripcion, estado, valoracion, precio } = req.body;
    let nuevoProducto = await producto.create(
      {
        nombre: nombre,
        descripcion: descripcion,
        estado: estado,
        valoracion: valoracion,
        precio: precio,
      },
      {
        fields: ["nombre", "descripcion", "estado", "valoracion", "precio"],
      }
    );

    if (nuevoProducto) {
      res.json({
        ok: true,
        msg: "Producto creado",
        nuevoProducto,
      });
    }
  } catch (error) {
    res.json({
      ok: false,
      msg: "Ha ocurido un error",
    });
  }
};
const añadirCarrito = async (req, res) => {
  const { usuarioId } = req.params;
  const producto = await producto.findAll({
    where: { usuarioId },
  });
  res.json({ producto });
};

module.exports = {
  getAllProductos,
  getProducto,
  updateProducto,
  deleteProducto,
  createProducto,
  añadirCarrito,
};
