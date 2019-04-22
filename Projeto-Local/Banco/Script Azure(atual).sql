create table Alerta (idAlerta int primary key, Atencao_temp float, Emergencia_temp float,
Urgencia_temp float, Atencao_umi float, Emergencia_umi float, Urgencia_umi float); 
create table Sensor (idLocal int primary key, Modelo_sensor varchar(30), Fk_idAlerta int);
alter table Sensor add foreign key (Fk_idAlerta) references Alerta(idAlerta);  
create table Medicamentos (idMedicamentos int primary key, Nome varchar(40), 
Quantidade int, Fk_idLocal int);
alter table Medicamentos add foreign key(Fk_idLocal) references Sensor(idLocal);
create table Historico (idHistorico int primary key, Maxima_temp float, Minima_temp float,
Media_temp float, Maxima_umi float, Minima_umi float, Media_umi float, DataHis date, 
Tempo_alerta datetime, Fk_idLocal int);
alter table Historico add foreign key(Fk_idLocal) references Sensor(idLocal);
create table Usuario (CPF int primary key, Nome_completo varchar(40), Nome_usuario varchar(30),
Email varchar(35), Senha varchar(20), Tel_Cel varchar(15), CRF varchar(25), 
Administrador varchar(30), Notificacao bit);
create table Sensor_Usuario(Fk_idLocal int, Fk_CPF int);
alter table Sensor_Usuario add foreign key(Fk_idLocal) references Sensor(idLocal);
alter table Sensor_Usuario add foreign key(Fk_CPF) references Usuario(CPF);
select * from Historico
insert into Usuario values 
(489234890-87, 'Caio César', 'CaioC', 'kaiodxn@gmail.com', '12345', '1197017-0525', '123', 'Sim', 1)

select * from Sensor
insert into Alerta values
(01, 8, 9, 10, 69, 70, 71)

insert into Sensor values 
(101, 'DHT11', 01)

select * from Historico
insert into Historico values 
(100, 8, 2, 5, 70, 40, 55, '2019-04-21','2019-04-21 00:10:00', 101)

select * from Medicamentos
insert into Medicamentos values
(001, 'Insulina', 10, 101)

select * from Historico as h, Sensor as s where h.Fk_idLocal = s.idLocal;