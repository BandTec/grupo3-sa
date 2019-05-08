var express = require('express');
var router = express.Router();
var C_dashBoard_ = require('../controller/controller_dashBoard');
var C_dashBoard = new C_dashBoard_();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('monitoramento');
  C_dashBoard.gerenciar(req);
});

module.exports = router;
