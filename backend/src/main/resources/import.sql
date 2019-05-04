INSERT INTO roles(name) VALUES ('USER');
INSERT INTO roles(name) VALUES ('ADMIN');
INSERT INTO roles(name) VALUES ('MODERATOR');
INSERT INTO roles(name) VALUES ('REDACTOR');

INSERT INTO users(username, password, name_surname, email) VALUES ('user', '$2a$10$.BR9gtXEQFZsVxQCFXgavOvTfkyTjDYqBtyzNKIpwvxdDI2tuEooa', 'user user', 'user@example.com');
INSERT INTO users(username, password, name_surname, email) VALUES ('admin', '$2a$10$w6j7reyRSZzBps0s23CZgeYYg2QlSjNUDxzwPxBiSqcWPNWWQMDge', 'admin admin', 'admin@example.com');
INSERT INTO users(username, password, name_surname, email) VALUES ('moderator', '$2a$10$w6j7reyRSZzBps0s23CZgeYYg2QlSjNUDxzwPxBiSqcWPNWWQMDge', 'moderator moderator', 'moderator@example.com');
INSERT INTO users(username, password, name_surname, email) VALUES ('redactor', '$2a$10$w6j7reyRSZzBps0s23CZgeYYg2QlSjNUDxzwPxBiSqcWPNWWQMDge', 'redactor redactor', 'redactor@example.com');

INSERT INTO user_roles(user_id, role_id) VALUES(1, 1);

INSERT INTO user_roles(user_id, role_id) VALUES(2, 1);
INSERT INTO user_roles(user_id, role_id) VALUES(2, 2);

INSERT INTO user_roles(user_id, role_id) VALUES(3, 3);
INSERT INTO user_roles(user_id, role_id) VALUES(4, 4);

INSERT INTO tests(id, language, name) VALUES(1, 'pl', 'Testowy test po polsku');
INSERT INTO tests(id, language, name) VALUES(2, 'en', 'Test test in english');

INSERT INTO questions(question, type, test_id) VALUES ('Jaki język jest najlepsiejszy?', 'variant', 1);
INSERT INTO questions(question, type, test_id) VALUES ('Jaka jest ocena filmu Masło?', 'scala', 1);
INSERT INTO scala(min, max, question_id) VALUES (1, 5, 2);
UPDATE questions SET scala_answer_id = 1 WHERE id = 2;
INSERT INTO questions(question, type, test_id) VALUES ('Co jest lepsze JSON czy XML i dlaczego?', 'open', 1);
INSERT INTO questions(question, type, test_id) VALUES ('Jak oceniasz jakość kodu?', 'numeric', 1);
INSERT INTO variants(text, question_id) VALUES ('C#', 4);
INSERT INTO variants(text, question_id) VALUES ('Java', 4);
INSERT INTO variants(text, question_id) VALUES ('C++', 4);

INSERT INTO questions(question, type, test_id) VALUES ('What is the best language?', 'variant', 2);
INSERT INTO questions(question, type, test_id) VALUES ('What is score of movie Butter?', 'scala', 2);
INSERT INTO scala(min, max, question_id) VALUES (1, 5, 6);
UPDATE questions SET scala_answer_id = 2 WHERE id = 6;
INSERT INTO questions(question, type, test_id) VALUES ('What is better JSON or XML and why?', 'open', 2);
INSERT INTO questions(question, type, test_id) VALUES ('How do you rate the quality of the code?', 'numeric', 2);
INSERT INTO variants(text, question_id) VALUES ('C#', 8);
INSERT INTO variants(text, question_id) VALUES ('Java', 8);
INSERT INTO variants(text, question_id) VALUES ('C++', 8);

INSERT INTO positions(name, active) VALUES ('Senior Java Developer', false);

