var sql = require('mssql');
var config = require('../config/sql');


function banco()
{
    sql.connect(config, err => {
        
          
        console.log('errosda   ' + err);

        banco.prototype.select = function(callback){
          
         new sql.Request().query('select * from usuario', callback)

        }

        banco.prototype.insert = function(req, callback){

         new sql.Request().query(`insert into usuario values ('${req.body.email}','${req.body.usuario}','${req.body.password}');`, callback)

        }
    });

};




module.exports= banco;