var express = require('express');
const { getAllUsers,getUser,updateUser,deleteUser ,createUser} = require ('../controllers/usuarios'); 
var router = express.Router();

//Usuarios
router.get('/allUses', getAllUsers);
router.get('/myUser/:id', getUser);
router.post('/create', createUser);
router.put('/update/id', updateUser);
router.delete('/delete/:id', deleteUser);

module.exports = router;
