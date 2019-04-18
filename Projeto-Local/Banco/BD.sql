create database Nexus_Tec;
use Nexus_Tec;

create table Usuario (
  CPF int primary key,	
  Nome_Completo varchar (40),
  Nome_Usuario varchar (40),
  Email varchar (40),
  Senha varchar (40),
  confirmar_Senha varchar (40),
  CRF varchar (40),
  Tel_Cel varchar (30),
  Administrador varchar (40),
  Notificacao varchar (40)
  );

 insert into Usuario values
  ('598567214', 'Romão vitor', '@romao18', 'romaov06@gmail.com', '12345678', '12345678', '4654654','953213684', 'sim', 'sim'),  
  ('645879312', 'Leonardo Uezo', '@leonardouezu', 'LeonardoU@gmail.com', '87654321', '87654321', '5368798','996083866', 'não', 'sim'),  
  ('854789963', 'Gustavo Uesso', '@gustavouesso', 'GustavU@gmail.com', '46751601', '46751601', '8657892','988202157', 'sim', 'não'),
  ('984941563', 'Igor do Santos', '@igordosantos6', 'IgorS@gmail.com', '96385274', '96385274', '1257863','967134307', 'não', 'não'),
  ('414526357', 'Caio Cesar', '@caiocesar198', 'CaioC@gmail.com', '14725836', '14725836', '7458962','970170525', 'sim', 'sim');

 select * from Usuario;

 create table Local1 (
  idLocal int primary key auto_increment,
  Nome_M varchar (40)
  );
  
 insert into Sensor values
  (null,'insulinas'),
  (null,'Xalacon '),
  (null,'Solução Oftálmica'),
  (null,'Xalatan Solução Oftálmica'),
  (null,'Foraseq'),
  (null,'Arulatan Solução Oftálmica'),
  (null,'Miacalcic Spray nasal');

  select * from Sensor;
  

 create table Historico (
  idHistorico int primary key auto_increment,
  Maxima_t float,
  Minima_t float,
  Media_t float,
  Maxima_u float,
  Minima_u float,
  Media_u float,
  Data date,
  Tempo_Alerta varchar (40)
  );

 insert into Historico values
  (null,8, 2, 2.8, 70, 40, 40.70,'2019-03-28', '23:59'), 
  (null,8, 2, 2.8, 70, 40, 40.70,'2019-03-29', '23:59'),
  (null,8, 2, 2.8, 70, 40, 40.70,'2019-03-30', '23:59'),
  (null,8, 2, 2.8, 70, 40, 40.70,'2019-03-31', '23:59');
 
 select * from Historico;     

CREATE TABLE Medicamentos (
Nome varchar(40),
idMedicamentos int PRIMARY KEY,
Quantidade int
);

insert into Medicamentos
  (null,'insulinas'),
  (null,'Xalacon '),
  (null,'Solução Oftálmica'),
  (null,'Xalatan Solução Oftálmica'),
  (null,'Foraseq'),
  (null,'Arulatan Solução Oftálmica'),
  (null,'Miacalcic Spray nasal');

  select *from Medicamentos;

 create table Alerta (
  idAlarme int primary Key auto_increment,
  atenção_t float,
  emergencia_t float,
  urgencia_t float,
  atenção_u float,
  emergencia_u float,
  urgencia_u float,
  );

 insert into Alerta values 
  (null, 1, -4, -9, 39, 34, 29),
  (null, 9, 14, 19, 71, 76, 81);

 delete database Nexus_Tec;