CREATE TRIGGER insertSensor
ON monitoramento
FOR INSERT
AS BEGIN

    declare
@temp float,
@umid float

SELECT @temp = temperatura_atual, @umid = umidade_atual FROM INSERTED WHERE FK_SENSOR = 2

insert into monitoramento values (@temp+22,@umid+15,'00:00:00',3)

END


SELECT * from monitoramento order by idatual desc
select * from usuario

insert into sensor_usuario values (3,7)

INSERT into alerta values(95,40,'E','U',3)

UPDATE SENSOR SET APELIDO ='AMBIENTE' WHERE IDSENSOR = 3

select * from monitoramento

select avg(Temperatura_Atual) from Monitoramento WHERE FK_SENSOR =2 and data_mon >= '2019/05/30'

select (sum(Temperatura_Atual)/count(Temperatura_Atual)) from Monitoramento WHERE FK_SENSOR =2 and data_mon >= '2019/05/30'

select (count(Temperatura_Atual)+3)/4  from Monitoramento  WHERE FK_SENSOR =2 and data_mon >= '2019/05/30' 

select  3*(count(Temperatura_Atual)+1)/4 from Monitoramento  WHERE FK_SENSOR =2 and data_mon >= '2019/05/30' 
