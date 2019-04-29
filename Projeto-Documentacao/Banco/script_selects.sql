-- select que traz os resultados dos sensores e seus respectivos alertas

select * from sensor as s,alerta as a where a.idAlerta = s.fk_idAlerta

-- select que traz os resultados dos  medicamentos e seus respectivos sensores

select * from sensor as s,medicamentos as m where m.fk_sensor = s.idSensor

-- select que traz os resultados dos  medicamentos e seus respectivos sensores


select * from sensor as s,medicamentos as m where m.fk_Sensor = s.idSensor







