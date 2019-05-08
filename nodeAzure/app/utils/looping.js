const date = require("./date");
const repositorio_Monitoramento = require('../repositorio/repositorio_Monitoramento');
module.exports={
    startLooping(){


            
        var u = 2700;
        setInterval(function(){

            repositorio_Monitoramento.selectUltimoSensor1(u).then(resolve=>{
                
                u++;
                let time=date.getTime(resolve.recordset[0].Data_mon+'GMT-6:00')
        
                let temp = resolve.recordset[0].Temperatura_Atual;
        
                let umid = resolve.recordset[0].Umidade_Atual;


              

                global.socket_io.emit('replay',time,temp,umid);

            })

        },5000)
            

            
            

    }
                

}
        

        

    