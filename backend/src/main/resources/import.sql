INSERT INTO roles(name) VALUES ('USER');
INSERT INTO roles(name) VALUES ('ADMIN');


INSERT INTO users(username, password, email) VALUES ('user', '$2a$10$.BR9gtXEQFZsVxQCFXgavOvTfkyTjDYqBtyzNKIpwvxdDI2tuEooa', 'user@example.com');
INSERT INTO users(username, password, email) VALUES ('admin', '$2a$10$w6j7reyRSZzBps0s23CZgeYYg2QlSjNUDxzwPxBiSqcWPNWWQMDge', 'admin@example.com');

INSERT INTO user_roles(user_id, role_id) VALUES(1, 1);

INSERT INTO user_roles(user_id, role_id) VALUES(2, 1);
INSERT INTO user_roles(user_id, role_id) VALUES(2, 2);