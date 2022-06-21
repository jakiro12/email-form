
/* Todo es de manera local :D */
CREATE TABLE users(
    email TEXT,
    password TEXT
)
INSERT INTO users VALUES(
    'lautaro@hotmail.com',
    '1234'
);
SELECT * FROM users;

CREATE TABLE inbox(
    addressee TEXT,
    subject TEXT,
    bodycontent TEXT
)
