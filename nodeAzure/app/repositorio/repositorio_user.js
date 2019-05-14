const mssql = require('../configs/db')
module.exports  = {
    async login(data){
        const sql = await mssql.connect()
        return new Promise((resolve,reject)=>{
            
            
            sql.query(`select * from tb_users where email ='${data.email} ' `,(err,rs)=>{

                if(err){
                    reject(err);
                }else{
                    resolve(rs);
                }

             });
            
        });
        

    }
}