# Exercício 1 - Crie o banco de dados TryBD_cars
CREATE DATABASE TryBD_cars;
USE TryBD_cars;

#Exercício 2 - Crie uma tabela chamada models:
#A tabela models deve ter os seguintes atributos:
#id: Deve ser um número, chave primária e deve incrementar automaticamente;
#name: Deve ser uma string de no máximo 80 caracteres e não deve permitir nulo;
#brand: Deve ser uma string de no máximo 80 caracteres e não deve permitir nulo;
CREATE TABLE models(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL,
    brand VARCHAR(80) NOT NULL
);