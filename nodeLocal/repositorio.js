const mssql = require('./configsDB');

module.exports={
    async busca(temp,umid) {

        const sql = await mssql.connect()


        var date = new Date();
        sql.query(`insert into monitoramento values (${temp},${umid},'${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}',2)`, (err, result) => {
            // ... error checks
        
            if(err){
                console.log(err);
            }
        });
      

  

        

    }
}


