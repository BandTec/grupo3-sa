const repositorio_Monitoramento = require('../repositorio/repositorio_Monitoramento');
const rUser = require('../repositorio/repositorio_user');
const date = require("./../utils/date")
class Controller_dashBoard{

  constructor(){
    this.io;
  
  }

  gerenciar(){
 
    this.selectToplast10()
    
    
    
  }

 
  
  selectToplast10(){

    repositorio_Monitoramento.selectTodosSensor1().then(rs=>{
           
      var time =[];
      var temp = [];
      var umid = [];

        for(let i = 0;i < 10;i++){


        time[i]=date.getTime(rs.recordset[i].Data_mon+"GMT-6:00");


        temp[i] = rs.recordset[i].Temperatura_Atual;

        umid[i] = rs.recordset[i].Umidade_Atual;
        
          
      }
      
            
      global.socket_io.emit('start',time,temp,umid);

      
    })
  }

  selectSensoresEAlertas(cpf){
    return new Promise((resolve,reject)=>{
      rUser.selectSensoresEAlertas(cpf).then(rs=>{resolve(rs)})



    });

  }



}


    


module.exports=Controller_dashBoard;