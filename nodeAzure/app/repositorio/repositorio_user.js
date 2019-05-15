const mssql = require('../configs/db')
module.exports  = {
    async login(data){
        const sql = await mssql.connect()
        return new Promise((resolve,reject)=>{
            
            
            sql.query(`select * from usuario where email ='${data.email}' or nome_usuario = '${data.email}' `,(err,rs)=>{

                if(err){
                    console.log(err);
                    reject(err);
                }else{
                   // console.log(rs.recordset)
                    resolve(rs.recordset);
                }

             });
            
        });
        

    },

    async selectSensoresEAlertas(cpf){
        const sql = await mssql.connect()
        return new Promise((resolve,reject)=>{
            
            
            sql.query(`select apelido,a.* from sensor_usuario inner join usuario 
            on cpf = fk_cpf inner join sensor on fk_sensor = idsensor inner join alerta as a 
            on fk_idalerta = idalerta where cpf = ${cpf}`,(err,rs)=>{

                if(err){
                    console.log(err);
                    reject(err);
                }else{
                   console.log(rs.recordset)
                    resolve(rs.recordset);
                }

             });
            
        });
    }
}