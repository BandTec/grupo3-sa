
create table Alerta (
idAlerta int primary key, 
max float,
min float,
Tipo_Alerta varchar(1),
Tipo_Unidade varchar(1)
); 

create table Sensor (
idSensor int primary key,
Modelo_sensor varchar(30),
Fk_idAlerta int,
apelido varchar(40)
);
alter table Sensor add foreign key (Fk_idAlerta) references Alerta(idAlerta); 

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
fk_Sensor int);

alter table Monitoramento add foreign key(fk_Sensor) references Sensor(idSensor);

create table Usuario (CPF int primary key,
Nome_completo varchar(40),
Nome_usuario varchar(30),
Email varchar(35),
Senha varchar(20),
Tel_Cel varchar(15),
CRF varchar(25), 
Administrador bit,
Notificacao bit);

create table Sensor_Usuario(
fk_Sensor int,
Fk_CPF int);

alter table Sensor_Usuario add foreign key(fk_Sensor) references Sensor(idSensor);
alter table Sensor_Usuario add foreign key(Fk_CPF) references Usuario(CPF);
