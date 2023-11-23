#Exercício 1 - Crie uma chave estrangeira utilizando o atributo model_id
#Todo veículo possui apenas um modelo, mas um modelo pode estar presente em vários veículos… Pensando no que mostramos no conteúdo até agora, faça um relacionamento 1:N, entre as tabelas vehicles e models.

#Remova o atributo model da tabela vehicles;
ALTER TABLE vehicles DROP COLUMN model;
#Adicione uma chave estrangeira ao atributo model_id.
ALTER TABLE vehicles ADD FOREIGN KEY (model_id) REFERENCES models (id);

#Desafio
#Outra coisa para se prestar a atenção, é que um modelo esta diretamente ligado a “Marca” de um veículo! Observe que foi repetido duas vezes Honda, será que essa é a melhor forma de armazenar as marcas dos veículos!? 🤔
#Pensando nisso, uma marca pode ter vários modelos, mas um modelo é só de uma marca!! Com que vimos até agora, como podemos melhorar a organização do nosso banco TryBD_cars?

#Criando a tabela brands:
CREATE TABLE brands(
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(25) NOT NULL
);

#Populando a tabela brands:
INSERT INTO brands (name) 
VALUES ('Honda'),
       ('Toyota');

#Alterando a tabela models para receber o atributo brand_id:
ALTER TABLE models 
    ADD COLUMN brand_id INTEGER;

#Tornando o atributo brand_id uma chave estrangeira:
ALTER TABLE models 
    ADD FOREIGN KEY (brand_id) REFERENCES brands (id);

#Atualizando brand_id na tabela models;
UPDATE models SET brand_id = 1 WHERE id = 1;

UPDATE models SET brand_id = 2 WHERE id = 2;

UPDATE models SET brand_id = 1 WHERE id = 3;

#Deletando atributo brand da tabela de models
ALTER TABLE models 
    DROP COLUMN brand;