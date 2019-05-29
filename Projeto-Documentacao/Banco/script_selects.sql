-- select que traz os resultados dos sensores e seus respectivos alertas

select * from sensor as s,alerta as a where a.idAlerta = s.fk_idAlerta

-- select que traz os resultados dos  medicamentos e seus respectivos sensores

select * from sensor as s,medicamentos as m where m.fk_sensor = s.idSensor

-- select que traz os resultados dos  medicamentos e seus respectivos sensores


select * from sensor as s,medicamentos as m where m.fk_Sensor = s.idSensor

select avg(Temperatura_Atual);

select (sum(Temperatura_Atual)/count(Temperatura_Atual)) from Monitoramento;

select (count(Temperatura_Atual)+3)/4  order by Temperatura_Atual;  

select 3*(count(Temperatura_Atual)+1)/4  order by Temperatura_Atual;



