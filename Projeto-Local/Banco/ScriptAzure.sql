create table Alerta (idAlerta int primary key, max float, min float, Tipo_Alerta varchar(1),
Tipo_Unidade varchar(1)); 
create table Sensor (idLocal int primary key, Modelo_sensor varchar(30), Fk_idAlerta int);
alter table Sensor add foreign key (Fk_idAlerta) references Alerta(idAlerta);  
create table Medicamentos (idMedicamentos int primary key, Nome varchar(40), 
Quantidade int, Fk_idLocal int);
alter table Medicamentos add foreign key(Fk_idLocal) references Sensor(idLocal);
create table Monitoramento (idAtual int primary key, Temperatura_Atual float, 
Umidade_Atual float, Data_mon datetime, idLocal int);
alter table Monitoramento add foreign key(idLocal) references Sensor(idLocal);
create table Usuario (CPF int primary key, Nome_completo varchar(40), Nome_usuario varchar(30),
Email varchar(35), Senha varchar(20), Tel_Cel varchar(15), CRF varchar(25), 
Administrador varchar(30), Notificacao bit);
create table Sensor_Usuario(Fk_idLocal int, Fk_CPF int);
alter table Sensor_Usuario add foreign key(Fk_idLocal) references Sensor(idLocal);
alter table Sensor_Usuario add foreign key(Fk_CPF) references Usuario(CPF);
select * from Monitoramento
insert into Usuario values 
(489234890-87, 'Caio César', 'CaioC', 'kaiodxn@gmail.com', '12345', '1197017-0525', '123', 'Sim', 1)

select * from Sensor
insert into Alerta values
(01, 8, 2, 'U', 'T')

insert into Sensor values 
(101, 'DHT11', 01)

select * from Monitoramento
insert into Monitoramento values 
(100, 8, 75,'2019-04-21 00:10:00', 101)

select * from Medicamentos
insert into Medicamentos values
(001, 'Insulina', 10, 101)

select * from Monitoramento as m, Sensor as s where m.idLocal = s.idLocal;
