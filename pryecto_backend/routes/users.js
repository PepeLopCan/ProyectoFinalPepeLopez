var express = require('express');
var router = express.Router();
const { getAllUsers,getUser,updateUser,deleteUser ,createUser,uploadAvatar,mostrarPedidos} = require ('../controllers/usuarios'); 
const {token,ValiarAdmin_Role  }= require ('../middleware/validar-token');
//Usuarios
router.get('/todos', getAllUsers);
router.get('/misPedidos/:id', mostrarPedidos);
router.get('/miUsuario/:id', token, getUser);
router.post('/create',createUser);
router.put('/update/:id', token,updateUser);
router.delete('/delete/:id', deleteUser);

module.exports = router;
