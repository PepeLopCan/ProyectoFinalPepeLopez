var express = require('express');
var router = express.Router();
const {token,ValiarAdmin_Role  }= require ('../middleware/validar-token');
const producto = require("../models/productos");

const { getAllProductos,getProducto,createProducto ,updateProducto,deleteProducto, uploadImage, upload} = require ('../controllers/productos'); 


router.get('/todos',token,getAllProductos);
router.get('/miProducto/:id',token, getProducto);
router.post('/create/:id',token, ValiarAdmin_Role,createProducto);
router.put('/update/:id',token,ValiarAdmin_Role, updateProducto);
router.delete('/delete/:id',token,ValiarAdmin_Role ,deleteProducto);
router.post('/upload/:id',upload.single('imagen'), async (req, res) => {
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
})

module.exports = router; 