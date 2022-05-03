const jwt = require('jsonwebtoken'); 
const tokenConfig = require('../helpers/auth'); 
const usuario = require("../models/usuario");

const token = async (req, res,next) => {

if ( !req.headers.authorization){
    res.status(401).json({msg:"Acceso no autorizado"})
}else {
    let token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, tokenConfig.secret, ( err, decoded) =>{
        if(err){ throwres.status(500).json({msg:"Token no valido", err})
    }else{
        console.log(decoded);
        next()
    }
    })
}
}

const ValiarAdmin_Role = async ( req, res , next)=>{

    try{
      const id = req.params.id
      console.log(req.params)
      console.log(id)
      const user = await usuario.findById({
        where: {
          id: id,
        },
      });
      console.log(user);
      const admin = "ADMIN_ROLE"; 
      if(user.role != admin) return res.status(401).json('No eres admin')
      next()
    }catch (error) {
      console.log(error);
      res.status(500).json({
        ok:false,
        msg:"No funcionar" 
      })
    }
  }
  

module.exports = token,ValiarAdmin_Role;