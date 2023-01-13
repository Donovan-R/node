create database task_manager;

create table task(
    task_id serial primary key,
    name varchar(255) not null,
    completed boolean  default false
);