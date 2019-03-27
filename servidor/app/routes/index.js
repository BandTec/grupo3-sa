var express = require('express');
var router = express.Router();
var controller = require('../controllador/controllerCadastro');
var controladora = new controller();




/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index');

  

});

router.post('/',function(req,res){

  controladora.cadastrar(req,res);
  
});

module.exports = router;
