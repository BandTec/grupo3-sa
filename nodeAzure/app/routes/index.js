var express = require('express');
var router = express.Router();
var C_dashBoard_ = require('../controller/controller_dashBoard');
var C_dashBoard = new C_dashBoard_();
var repositorio_Historico = require('../repositorio/repositorio_Historico');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('monitoramento');
  C_dashBoard.gerenciar(req);
});


router.get('/historico', function(req, res, next) {
  
  repositorio_Historico.selectDadosBas();
  //repositorio_Historico.selectAnalyticsT();
  //repositorio_Historico.selectAnalyticsU();
});
module.exports = router;
