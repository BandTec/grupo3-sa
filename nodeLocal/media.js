const mssql = require('./configsDB');

module.exports={
    async busca(temp,umid) {

        const sql = await mssql.connect()

        console.log('2');


    if(i < 100){
        t[i]=Number(temp[0]+temp[1]+temp[2]+temp[3]+temp[4]);
        u[i]=Number(temp[6]+temp[7]+temp[8]+temp[3]+temp[9]);
       }else{
    
        var sumT = 0;
        for( let cont = 0; cont < t.length; cont++ ){
            sumT += parseInt( t[cont], 10 ); //don't forget to add the base
        }
       var sumU = 0;
        for( let c = 0; c < u.length;  c++ ){
            sumU += parseInt( u[c], 10 ); //don't forget to add the base
        }
        
        var avgT = sumT/t.length;
        var avgU = sumU/u.length;
    
        console.log(avgU);
        console.log(avgT);
        
        
        sql.busca(avgT,avgU);
        i=0;


    }

    i++;

}
       
}