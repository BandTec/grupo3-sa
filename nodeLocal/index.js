const SerialPort = require('serialport'); //Recupera o modulo Serial Port
var sql = require('./repositorio');

const Readline = SerialPort.parsers.Readline; // Atribui o metodo readline do serial port a variável ReadLine
const port = new SerialPort('COM3'); //Conecta a porta serial COM5. Veja a sua na IDE do Arduino -> Tools -> Port


   
const parser = port.pipe(new Readline({delimiter: '\n'})); //Lê a linha apenas se uma nova linhas for inserida
var t =[];
var u=[];
var b = 0;
var i =0;
parser.on('data', (temp) => { //Na recepção dos dados = "On data retrieving"
if(i < 50){
    
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
});



