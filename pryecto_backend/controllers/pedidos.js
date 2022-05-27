const { response } = require("express");
const pedido = require("../models/pedidos");
const producto = require("../models/productos");



const getPedido = async (req, res) => {
    try {
   const AllPedidos = await pedido.findAll()
   res.json({
     ok: true,
     AllPedidos,
   });
 } catch(error) {
   res.status(500).json({
     ok: false,
     msg: error,
   });
 } 
};

const crearPedido = async (req, res) => {
    try{
        const body = req.body; 
        console.log(body)
        const crearUser = await pedido.create(body);
        res.json({
            ok: true,
            msg:"Pedido Creado",
            crearUser
        })
    }catch (error) {
        res.status(500).json({
            ok:false, 
            msg:"Error"
        })
    }
}

module.exports = {
    getPedido,
    crearPedido
}