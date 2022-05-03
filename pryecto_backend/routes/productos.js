var express = require('express');
var router = express.Router();
var validarJWT= require ('../middleware/validar-token');

const { getAllProductos,getProducto,createProducto,añadirCarrito ,updateProducto,deleteProducto} = require ('../controllers/productos'); 


router.get('/todos',validarJWT, getAllProductos);
router.get('/miProducto/:id',validarJWT, getProducto);
router.post('/create', validarJWT,createProducto);
router.post ('/carrito/:id',validarJWT,añadirCarrito)
router.put('/update/:id',validarJWT, updateProducto);
router.delete('/delete/:id',validarJWT, deleteProducto);

module.exports = router;