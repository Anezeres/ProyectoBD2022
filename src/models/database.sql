CREATE DATABASE memmo;

--Ver todas las bases de datos: /l

-- conectarse a la base de datos: \c memmo

CREATE TABLE usuarios (
    nombre VARCHAR(255) NOT NULL;
    direccion VARCHAR(255) NOT NULL;
    email VARCHAR(255) NOT NULL;
    telefono VARCHAR(255) NOT NULL;
    recibo VARCHAR(255) NOT NULL;
    metodoPago VARCHAR(255) NOT NULL;
    password VARCHAR(255) NOT NULL;
);

CREATE TABLE servicios;
CREATE TABLE trabajador;
CREATE TABLE labor;

-- listar tablas creadas: \dt 


--Insertar datos de la tabla 

INSERT INTO usuarios VALUES ()


-- COMANDOS

SELECT * FROM usuarios;