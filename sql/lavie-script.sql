create database lavie;

use lavie;

create table psicologos(
    id int not null auto_increment primary key,
    nome varchar(120) not null,
    email varchar(60) not null unique,
    senha varchar(120) not null,
    apresentacao text not null
);

create table pacientes(
    id int not null auto_increment primary key,
    nome varchar(120) not null,
    email varchar(60) not null unique,
    idade date not null
);

create table atendimentos(
    id int not null auto_increment primary key,
    paciente_id int not null,
    psicologo_id int not null, 
    data_atendimento date not null,
    observacao text not null,
    constraint paciente_atendimento foreign key (paciente_id) references pacientes(id),
    constraint psicologo_atendimento foreign key (psicologo_id) references psicologos(id)
);