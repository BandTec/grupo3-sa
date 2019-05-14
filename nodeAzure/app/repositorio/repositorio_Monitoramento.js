const mssql = require('../configs/db');


module.exports={
    async selectTodosSensor1() {

        const sql = await mssql.connect()
        return new Promise((resolve,reject)=>{
            sql.query(`select * from monitoramento where idAtual > (select count(idAtual) from monitoramento)-10
            and fk_Sensor = 1`,(err,result)=>{
                
                if(err){
                    console.log(err)
                }else{
                    resolve(result);
                }
    
    
            });
        });

        

    },
    async selectUltimoSensor1(i) {

        const sql = await mssql.connect()
        return new Promise((resolve,reject)=>{
            sql.query(`select * from monitoramento where idAtual = (select count(idatual) from monitoramento)+1
            `,(err,result)=>{
                
                if(err){
                    console.log(err)
                }else{
                    console.log('ok');
                    resolve(result);
                }
    
    
            });
        });

        

    }
}