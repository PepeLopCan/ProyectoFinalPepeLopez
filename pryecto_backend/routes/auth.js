const { login,register} = require ('../controllers/auth'); 
var express = require('express');
var router = express.Router();

router.post('/login/:id',login); 
router.post('/register',register)

module.exports = router; 