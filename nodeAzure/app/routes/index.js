var express = require('express');
var router = express.Router();
var C_dashBoard_ = require('../controller/controller_dashBoard');
var C_dashBoard = new C_dashBoard_();
var repositorio_Historico = require('../repositorio/repositorio_Historico');
const login = require("../controller/controller_login");



router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next) {

  var erro = false//login.validar(req);

  if(!erro){
    
    login.autenticar(req).then((user)=>{
      
      req.session.user = user;
      res.redirect('/');
    }).catch((erros)=>{
      
      erro = [];
      erro.push(erros);
      res.render('login',{erro});
    });
  }else{
    res.render('login',{erro});
  }

});




/* GET home page. */
router.get('/', function(req, res, next) {
  C_dashBoard.selectSensoresEAlertas(req.session.user.CPF).then(sensores=>{
    res.render('monitoramento',{sensores})
  });
  
 // C_dashBoard.gerenciar(req);
});




router.get('/historico', function(req, res, next) {
  
  repositorio_Historico.selectDadosBas();
  //repositorio_Historico.selectAnalyticsT();
  //repositorio_Historico.selectAnalyticsU();
});
module.exports = router;
