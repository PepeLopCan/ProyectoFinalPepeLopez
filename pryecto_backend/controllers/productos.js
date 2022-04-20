const producto = require("../models/productos");

const getAllProductos = async (res, req) => {
  try {
    const AllProducts = await producto.findAll({
      order: [["id", "DESC"]],
    });
    res.json({
      ok: true,
      AllProducts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};
const getProducto = async (res, req) => {
  try {
    const { id } = req.params;
    const miUsuario = producto.findOne({
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
const updateProducto = async (res, req) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, precio, estado } = req.body;
    const arrayUsuario = await producto.findOne({
      attributes: ["id", "nombre", "descripcion", "precio", "estado"],
      where: { id: id },
    });

    await producto.update(
      {
        nombre,
        descripcion,
        precio,
        estado,
      },
      {
        where: { id },
      }
    );
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
const deleteProducto = async (res, req) => {
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
const createProducto = async (res, req) => {
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
