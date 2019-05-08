#include <dht.h>

const int pinoDHT11 = A5; //PINO ANALÓGICO UTILIZADO PELO DHT11

dht DHT; //VARIÁVEL DO TIPO DHT

void setup(){
  Serial.begin(9600); //INICIALIZA A SERIAL
  
}

void loop(){
  DHT.read11(pinoDHT11); //LÊ AS INFORMAÇÕES DO SENSOR

  Serial.print(DHT.temperature); //IMPRIME NA SERIAL O VALOR DE UMIDADE MEDIDO E REMOVE A PARTE DECIMAL
  Serial.print(","); //ESCREVE O TEXTO EM SEGUIDA

  Serial.println(DHT.humidity); //IMPRIME NA SERIAL O VALOR DE UMIDADE MEDIDO
  



  
  delay(40); //INTERVALO DE 2 SEGUNDOS * NÃO DIMINUIR ESSE VALOR
}
