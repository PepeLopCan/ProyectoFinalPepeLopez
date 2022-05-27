var express = require('express');
const usuario = require("../models/usuario")
var router = express.Router();
const { getAllUsers,getUser,updateUser,deleteUser ,createUser,upload} = require ('../controllers/usuarios'); 
const {token,ValiarAdmin_Role  }= require ('../middleware/validar-token');
//Usuarios
router.get('/todos', getAllUsers);
router.get('/miUsuario/:id', token, getUser);
router.post('/create',createUser);
router.put('/update/:id', token,updateUser);
router.delete('/delete/:id', deleteUser);
router.post('/uploadUser/:id',upload.single('imagen'), async (req, res) => {
    const file = req.file;
      const id = req.params.id;
      console.log(file) 
      if (file) {
        await usuario.update({ imagen: file.filename }, {
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
