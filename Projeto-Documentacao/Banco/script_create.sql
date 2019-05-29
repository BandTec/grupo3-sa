
create table Alerta (
idAlerta int primary key, 
max float,
min float,
Tipo_Alerta varchar(1),
Tipo_Unidade varchar(1)
); 

create table Unidade(
idUnidade int primary key,
endereco varchar(45),
nome varchar(35)
);

create table Sensor (
idSensor int primary key,
Modelo_sensor varchar(30),
Fk_idAlerta int,
apelido varchar(40),
fk_unidade int
);
alter table Sensor add foreign key (Fk_idAlerta) references Alerta(idAlerta); 
alter table Sensor add foreign key (fk_unidade) references Unidade(idUnidade); 

create table Medicamentos (
idMedicamentos int primary key, 
Nome varchar(40), 
Quantidade int,
Fk_Sensor int);

alter table Medicamentos add foreign key(Fk_Sensor) references Sensor(idSensor);

create table Monitoramento (
idAtual int primary key,
Temperatura_Atual float, 
Umidade_Atual float,
Data_mon datetime,
fk_Sensor int,
media float,
mediana float,
Pquart float,
Tquart float);

alter table Monitoramento add foreign key(fk_Sensor) references Sensor(idSensor);

create table Usuario (CPF bigint primary key,
Nome_completo varchar(40),
Nome_usuario varchar(30),
Email varchar(35),
Senha varchar(20),
Tel_Cel varchar(15),
CRF varchar(25), 
Administrador bit,
Notificacao bit,
foto text,
fk_unidade int);

alter table Usuario add foreign key(fk_unidade) references Unidade(idUnidade);

create table Sensor_Usuario(
fk_Sensor int,
Fk_CPF bigint);

alter table Sensor_Usuario add foreign key(fk_Sensor) references Sensor(idSensor);
alter table Sensor_Usuario add foreign key(Fk_CPF) references Usuario(CPF);

create table Sensor_Alerta(
fk_Sensor int,
fk_Alerta int);

alter table Sensor_Alerta add foreign key(fk_Sensor) references Sensor(idSensor);
alter table Sensor_Alerta add foreign key(fk_Alerta) references Alerta(idAlerta);

create table Analytics(
idAnalytics int primary key,
MedianaTemp float,
MediaTemp float,
PrimeiroQuarTemp float,
TerceiroQuarTemp float,
MedianaUmid float,
MediaUmid float,
PrimeiroQuarUmid float,
TerceiroQuarUmid float,
DataRegistro date,
Fk_Sensor int);

alter table Analytics add foreign key(fk_Sensor) references Sensor(idSensor);