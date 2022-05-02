const jwt = require('jsonwebtoken'); 
const tokenConfig = require('../helpers/auth'); 

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
module.exports = token;