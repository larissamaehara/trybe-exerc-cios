#Exercício 1 - Crie e popule uma tabela chamada accessories:
#Vamos continuar melhorando o banco TryBD_cars! Aplique as melhorias vistas nesta lição, mas agora na coluna accessories.

#Crie uma tabela nova chamada accessories com os seguintes atributos;
#id: Deve ser um número, chave primária e deve incrementar automaticamente;
#name: Deve ser uma string de no máximo 50 caracteres e não deve permitir nulo;
CREATE TABLE vehicle_rentals (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL
);

#Popule a tabela com:
#Vidro elétrico;
#Trava elétrica;
#Direção elétrica;
#Direção Hidráulica;
#Roda de liga leve.
INSERT INTO vehicle_rentals (name) 
    VALUES ('Vidro elétrico'),
           ('Trava elétrica'),
           ('Direção elétrica'),
           ('Direção Hidráulica'),
           ('Roda de liga leve');

#Exercício 2 - Crie e popule uma tabela chamada vehicle_accessories:
#Crie uma tabela nova chamada vehicle_accessories com os seguintes atributos;
#vehicle_id: Deve ser um número, chave chave estrangeira e não deve permitir nulo;
#accessory_id: Deve ser um número, chave chave estrangeira e não deve permitir nulo;
CREATE TABLE vehicle_accessories (
  vehicle_id INTEGER NOT NULL,
  accessory_id INTEGER NOT NULL,
  PRIMARY KEY (vehicle_id, accessory_id),
  FOREIGN KEY (vehicle_id) REFERENCES vehicles (id),
  FOREIGN KEY (accessory_id) REFERENCES accessories (id)
);

#Popule a tabela com:
#Veículo de id 2: Vidro elétrico, Trava elétrica e Direção elétrica;
#Veículo de id 3: Roda de liga leve;
INSERT INTO vehicle_accessories (vehicle_id, accessory_id) 
    VALUES (2, 1),
           (2, 2),
           (2, 3),
           (3, 5);

#Remova o atributo accessories da tabela vehicles.
ALTER TABLE vehicles DROP COLUMN accessories;