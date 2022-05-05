var express = require('express');
var router = express.Router();
const { getAllUsers,getUser,updateUser,deleteUser ,createUser,uploadAvatar,mostrarPedidos} = require ('../controllers/usuarios'); 
//Usuarios
router.get('/todos', getAllUsers);
router.get('/misPedidos/:id', mostrarPedidos);
router.get('/miUsuario/:id', getUser);
router.post('/create', uploadAvatar.single('imagen'),createUser);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

module.exports = router;
