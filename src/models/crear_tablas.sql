drop table if exists personas cascade;
drop table if exists trabajadores cascade;
drop table if exists clientes cascade;
drop table if exists labores cascade;
drop table if exists labores_posibles cascade;
drop table if exists servicios cascade;
drop table if exists servicios_posibles cascade;
drop table if exists servicios_disponibles cascade;
drop table if exists servicios_procesados cascade;
drop table if exists pagos cascade;
drop table if exists fotos_trabajadores cascade;

create table personas (
	persona_id SERIAL,
	persona_nombres varchar(50),
	persona_apellidos varchar(50),
	persona_password varchar(20),
	persona_telefono varchar(20),
	persona_direccion varchar (50),
	persona_correo varchar(50)
);
ALTER TABLE public.personas ADD CONSTRAINT personas_pk PRIMARY KEY (persona_id);

/*
 * foto llevaria el nombre del archivo que tiene la foto del trabajador
 */
create table trabajadores(
	trabajador_id SERIAL,
	trabajador_calificacion int
);
ALTER TABLE public.trabajadores ADD CONSTRAINT trabajadores_pk PRIMARY KEY (trabajador_id);
ALTER TABLE public.trabajadores ADD CONSTRAINT trabajador_persona_fk FOREIGN KEY (trabajador_id) REFERENCES public.personas(persona_id) ON DELETE CASCADE;

create table fotos_trabajadores(
	trabajador_fk integer,
	foto_nombre varchar(20)
);
alter table public.fotos_trabajadores add constraint fotos_pk primary key(trabajador_fk);
alter table public.fotos_trabajadores add constraint foto_trabajador_fk foreign key (trabajador_fk) references public.trabajadores(trabajador_id) on delete cascade;

create table clientes(
	cliente_id integer
);
ALTER TABLE public.clientes ADD CONSTRAINT clientes_pk PRIMARY KEY (cliente_id);
ALTER TABLE public.clientes ADD CONSTRAINT cliente_persona_fk FOREIGN KEY (cliente_id) REFERENCES public.personas(persona_id) ON DELETE CASCADE;

create table labores(
	labor_id SERIAL,
	labor_nombre varchar(50),
	labor_unidad varchar(20)
);
ALTER TABLE public.labores ADD CONSTRAINT labores_pk PRIMARY KEY (labor_id);

/*
Cuando un trabajador se pone disponible para hacer un servicio se añade a esta tabla
*/
create table servicios_disponibles (
	servicio_id SERIAL,
	trabajador_fk integer,
	labor_fk integer,
	servicio_tarifa integer
);
ALTER TABLE public.servicios_disponibles ADD CONSTRAINT servicios_pk PRIMARY KEY (servicio_id);
ALTER TABLE public.servicios_disponibles ADD CONSTRAINT servicio_trabajador_fk FOREIGN KEY (trabajador_fk) REFERENCES public.trabajadores(trabajador_id) ON DELETE CASCADE;
ALTER TABLE public.servicios_disponibles ADD CONSTRAINT servicio_labor_fk FOREIGN KEY (labor_fk) REFERENCES public.labores(labor_id) ON DELETE CASCADE;

/*
Cuando un cliente solicita un servicio con un trabajador 
*/
create table servicios_procesados(
	procesado_id SERIAL,
	servicio_fk integer,

	cliente_fk integer,
	procesado_costo integer,
	procesado_unidades integer,
	procesado_pagado boolean,
	procesado_calif char
);
ALTER TABLE public.servicios_procesados ADD CONSTRAINT procesados_pk PRIMARY KEY (procesado_id);
ALTER TABLE public.servicios_procesados ADD CONSTRAINT procesado_servicio_fk FOREIGN KEY (servicio_fk) REFERENCES public.servicios_disponibles(servicio_id) ON DELETE CASCADE;
ALTER TABLE public.servicios_procesados ADD CONSTRAINT procesado_cliente_fk FOREIGN KEY (cliente_fk) REFERENCES public.clientes(cliente_id) ON DELETE CASCADE;

create table pagos (
	pago_id SERIAL,
	pago_total integer,
	pago_fecha varchar(15),
	pago_trabajador_fk integer
);
ALTER TABLE public.pagos ADD CONSTRAINT pagos_pk PRIMARY KEY (pago_id);
alter table public.pagos add constraint pagos_trabajador_fk foreign key (pago_trabajador_fk) references public.trabajadores(trabajador_id) on delete cascade;

