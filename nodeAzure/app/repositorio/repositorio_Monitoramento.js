const mssql = require('../configs/db');


module.exports={
    async selectTodosSensor1() {

        const sql = await mssql.connect()
        return new Promise((resolve,reject)=>{
            sql.query(`select * from monitoramento where idAtual > (select count(idAtual) from monitoramento)-20 
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
            sql.query(`select * from monitoramento where idAtual =${i}
            `,(err,result)=>{
                
                if(err){
                    console.log(err)
                }else{
                    console.log(result);
                    resolve(result);
                }
    
    
            });
        });

        

    }
}