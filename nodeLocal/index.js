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
const media = require('./media');
});



