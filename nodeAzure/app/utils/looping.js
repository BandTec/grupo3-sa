const date = require("./date");
const repositorio_Monitoramento = require('../repositorio/repositorio_Monitoramento');
const alerta_ = require("../controller/controllerAlerta");
const alertaTemp = new alerta_('t');
const alertaUmid = new alerta_('u');

module.exports={
    startLooping(){


            
        var u = 2700;
        setInterval(function(){

            repositorio_Monitoramento.selectUltimoSensor1(u).then(resolve=>{
                
                u++;
                let time=date.getTime(resolve.recordset[0].Data_mon+'GMT-6:00')
        
                let temp = resolve.recordset[0].Temperatura_Atual;
        
                let umid = resolve.recordset[0].Umidade_Atual;


                alertaTemp.comparar(temp,3.5,6.5,2.5,7.5);
                alertaUmid.comparar(umid,50,60,45,65);

                global.socket_io.emit('replay',time,temp,umid);

               
            })

        },8000)
            

            
            

    }
                

}
        

        

    