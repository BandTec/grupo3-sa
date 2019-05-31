const SerialPort = require('serialport'); //Recupera o modulo Serial Port
var controlle = require('./controller');
var controller = new controlle();
const Readline = SerialPort.parsers.Readline; // Atribui o metodo readline do serial port a variável ReadLine
const port = new SerialPort('COM8'); //Conecta a porta serial COM5. Veja a sua na IDE do Arduino -> Tools -> Port
   
const parser = port.pipe(new Readline({delimiter: '\n'})); //Lê a linha apenas se uma nova linhas for inserida

parser.on('data', (temp) => { //Na recepção dos dados = "On data retrieving"
    controller.inserir(temp);



});



