#Exercício 1 - Crie e popule uma tabela chamada customers:
#Agora aplique o que você acabou de ver no banco TryBD_cars. Crie um relacionando de N:N entre tabelas vehicle e vehicle_rentals.

#Crie uma tabela nova chamada customers com os seguintes atributos;
#id: Deve ser um número, chave primária e deve incrementar automaticamente;
#name: Deve ser uma string de no máximo 50 caracteres e não deve permitir nulo;
#Popule a tabela com as pessoas existentes:
#Josefina Maria dos Santos;
#Kiélerson Robervaldo da Silva.

#Crie uma tabela nova chamada customers com os seguintes atributos:
CREATE TABLE customers (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL
);

#Popule a tabela com as pessoas existentes
INSERT INTO customers (name) 
    VALUES  ('Josefina Maria dos Santos'),
            ('Kiélerson Robervaldo da Silva');

#Exercício 2 - Altere a tabela vehicle_rentals para que ela receba o atributo customer_id:
#O atributo customer_id deve ter as seguintes características:

#Deve ser um número inteiro;
#Deve-se chamar customer_id e estar na tabela vehicles;
#Deve ser um chave estrangeira.
ALTER TABLE vehicle_rentals 
    ADD COLUMN customer_id INTEGER,
    ADD FOREIGN KEY (customer_id) REFERENCES customers (id);

#Exercício 3 - Finalize o relacionamento N:N entre vehicles e customers
#Altere a tabela vehicle_rentals preenchendo a coluna customer_id com os ids corretos;
UPDATE vehicle_rentals SET customer_id = 1 WHERE id = 1;

UPDATE vehicle_rentals SET customer_id = 2 WHERE id = 2
#Altere a tabela vehicle_rentals removendo a coluna customers e modificando a coluna customer_id para não aceitar valores nulos.
ALTER TABLE vehicle_rentals 
    DROP COLUMN customer_name,
    MODIFY customer_id INTEGER NOT NULL;