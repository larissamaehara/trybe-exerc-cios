#Exercício 1 - Crie e popule uma tabela chamada vehicle_rentals:
#Novamente temos mais uma melhoria em nosso banco de dados! Assim como os projetos estão sendo subutilizados no banco de dados da Trybe, os aluguéis estão tendo o mesmo papel no branco TryBD_cars!!! Chegou o momento de você ajustar isso:

#Crie uma tabela nova chamada vehicle_rentals com os seguintes atributos;
#id: Deve ser um número, chave primária e deve incrementar automaticamente;
#customer_name: Deve ser uma string de no máximo 50 caracteres e não deve permitir nulo;
#start: Deve ser uma data e não deve permitir nulo;
#end: Deve ser uma data e não deve permitir nulo;
#vehicle_id: Deve ser um número, chave chave estrangeira e não deve permitir nulo;
#Popule a tabela:
#Alugando o veículo: Corolla 1.8 GLI;
#Para a pessoa cliente: Josefina Maria dos Santos;
#Entre os dias: 2018-10-10 e 2018-10-11;
#Não esqueça de mover os dados do Kiélerson para a tabela nova;
#Remova os atributos rental_customer1, rental_start1 e rental_end1, da tabela vehicles;
CREATE TABLE vehicle_rentals (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  customer_name VARCHAR(50) NOT NULL,  
  start DATE NOT NULL,
  end DATE NOT NULL,
  vehicle_id INTEGER NOT NULL,
  FOREIGN KEY (vehicle_id) REFERENCES vehicles (id)
);

#Popule a tabela:
INSERT INTO vehicle_rentals (customer_name, start, end, vehicle_id) 
    VALUES ('Josefina Maria dos Santos', '2018-10-10', '2018-10-11', 2),
           ('Kiélerson Robervaldo da Silva', '2023-09-09', '2023-09-18', 3);

#Remova os atributos rental_customer1, rental_start1 e rental_end1, da tabela vehicles:
ALTER TABLE vehicles 
    DROP COLUMN rental_customer1,
    DROP COLUMN rental_start1,
    DROP COLUMN rental_end1;