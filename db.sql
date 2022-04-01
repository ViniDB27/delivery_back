CREATE TABLE IF NOT EXISTS clients ( 
  id           int auto_increment,
  name         varchar(255) not null,
  email        varchar(255) not null,
  password     varchar(255) not null,
  phone        varchar(255) null,
  street       varchar(255) null,
  number       varchar(255) null,
  neighborhood varchar(255) null,
  city         varchar(255) null,
  zip_code     varchar(255) null,
  
  constraint client_pk
  primary key (id)
);