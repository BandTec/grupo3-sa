var criptografia = require('../utils/criptografia');
var banco = require("../repositorio/banco");
var sql = new banco();
var cripto = new criptografia();

function controllerCadastro (){


    controllerCadastro.prototype.cadastrar= function(req,res){

         req.body.password = cripto.criptografar(req.body.password);


         sql.insert(req,function(err,result){
             console.dir(err);
             sql.select(function(err,result){
                 res.send(result);
             })
         })




        


    }


}

module.exports = controllerCadastro;