var express = require('express');
const { getAllProductos,getProducto,createProducto,añadirCarrito ,updateProducto,deleteProducto} = require ('../controllers/productos'); 
var router = express.Router();

router.get('/allProducts', getAllProductos);
router.get('/myProduct/:id', getProducto);
router.post('/create', createProducto);
router.post ('/carrito/:id',añadirCarrito)
router.put('/update/id', updateProducto);
router.delete('/delete/:id', deleteProducto);

module.exports = router; 