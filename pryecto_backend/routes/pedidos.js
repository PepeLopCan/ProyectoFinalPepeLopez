var express = require('express');
var router = express.Router();
var validarJWT= require ('../middleware/validar-token');

const {getPedido,crearPedido} = require ('../controllers/pedidos'); 


router.get('/todos', getPedido);
router.post('/crear', crearPedido);

module.exports= router;