create database jobs_api;

create table users(
    user_id serial primary key,
    name varchar(50) not null,
    email varchar(255) not null,
    password varchar(255) not null,
    check (char_length(name)>= 3 and char_length(name)<= 50),
    check (char_length(password) >= 6),
    unique (email)
);

create table jobs(
    job_id serial primary key,
    company varchar(255) not null,
    position varchar(100) not null,
    status varchar(255) not null check (status in ('entretien', 'refusé', 'en attente')) default 'en attente',
    user_id integer references users(user_id) on delete cascade not null,
    created_at timestamp with time zone not null default now(),
    updated_at timestamp with time zone not null default now()
);

create function update_updated_at() returns trigger as $$
begin 
new.updated_at = now();

return new;
end;
$$ language plpgsql;

create trigger update_jobs
before update on jobs
for each row
execute function update_updated_at();