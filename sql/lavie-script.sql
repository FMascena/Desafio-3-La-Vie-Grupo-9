create database lavie;

use lavie;

create table psicologos(
	id int not null auto_increment primary key,
    nome varchar(45) not null,
    email varchar(45) not null unique,
    senha varchar(100) not null,
    apresentacao varchar(150) not null
);

create table pacientes(
	id int not null auto_increment primary key,
    nome varchar(45) not null,
    email varchar(45) not null unique,
    idade date
);

create table atendimentos(
	id int not null auto_increment primary key,
    paciente_id int not null,
    psicologo_id int not null, 
    data_atendimento date not null,
    observacao text,
    constraint paciente_atendimento foreign key (paciente_id) references pacientes(id),
    constraint psicologo_atendimento foreign key (psicologo_id) references psicologos(id)
);