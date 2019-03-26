//--No Arduino
//-Esquerda Positiva (5V)
//-Direita Negativa (GND)
//-Meio Porta analógica

int pinoSensor = 5; //entrada na porta A5
int valorLido = 0;//variável auxiliar
float temperatura = 0; //armazenará a temperatura lida 
int linha =0; // se refere as linhas do excel 

void setup () {
  Serial.begin(9600); //inicia a comunicação serial a 9600 bauds
  Serial.println("CLEARDATA"); // reset comunicação serial
  Serial.println("LABEL,Hora, Temperatura,linha"); //nomeia a coluna
}

void loop(){
  valorLido = analogRead(pinoSensor); //leitura analógica d porta 
  temperatura = (valorLido * 0.00488);// 5 volts / 1023 = precisão da A/D
  temperatura = temperatura * 100; //converte milivolts para Celsius
  Serial.println(temperatura);
  linha++; //incrementa linha para que ela pule 
  Serial.print("DATA, TIME, "); // inicia a impressão de dados  
  Serial.print(",");
  Serial.println(linha);

  if(linha > 100){ //aqui, limita a row 1 em 100 dados 
    linha = 0; // alimentação da variável linha para dados iniciados
    Serial.println("ROW, SET, 2");
  }

  delay(1000); // delay de 1 segundo 
}

//Selecionar porta Ferramentas > Porta e seleciona a porta disponível após conectar o arduino
//Ctrl + U -- Compilar o código 
//Crtl + R -- Carregar (Colocar o código compilado no arduino)
//Crtl + Shift + M -- para mostras os dados que foram adiquiridos do arduino
