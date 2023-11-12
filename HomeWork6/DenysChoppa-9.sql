CREATE TABLE users (
    id SERIAL PRIMARY KEY ,
    username VARCHAR(50) UNIQUE NOT NULL ,
    email VARCHAR(50) UNIQUE  NOT NULL ,
    first_name VARCHAR(50) NOT NULL ,
    last_name VARCHAR(50) NOT NULL ,
    password VARCHAR(50) NOT NULL
);

INSERT INTO users (username, email, first_name, last_name, password)
VALUES ('Choppa', 'mamchyk.denys@lll.kpi.ua' , 'Denys' , 'Mamchyk' , 'aobndf2351lhg')
RETURNING *