#Exercício 1 - Crie uma tabela chamada vehicles:
#A tabela vehicles deve ter os seguintes atributos:
#id: Deve ser um número, chave primária e deve incrementar automaticamente;
#model: Deve ser uma string de no máximo 80 caracteres e não deve permitir nulo;
#year: Dever ser um número inteiro e não deve permitir nulo;
#price: Deve ser um número decimal de 10 dígitos com ponto na segunda casa, ex(R$ 40.000.000,00);
#accessories: Deve um texto sem tamanho definido;
#rental_customer1: Deve ser uma string de no máximo 50 caracteres;
#rental_start1: Deve ser uma data;
#rental_end1: Deve ser uma data;
CREATE TABLE vehicles(
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  model VARCHAR(80) NOT NULL,
  year INTEGER NOT NULL,
  price FLOAT(10,2),
  accessories TEXT,
  rental_customer1 VARCHAR(50),
  rental_start1 DATE,
  rental_end1 DATE
);

#Exercício 2 - Faça uma query que insira vários veículos na tabela vehicles:
#Os veículos são:

#CG 150:
#Modelo: CG 150 TITAN KS;
#Ano: 2007;
#Preço: R$ 6.700,00;
#Acessórios: N/A;
#Corolla:
#Modelo: Corolla 1.8 GLI;
#Ano: 2017;
#Preço: R$ 108.900,00;
#Acessórios: Vidro, trava, direção elétrica;
#Honda Fit:
#Modelo: Fit 1.5 Twist;
#Ano: 2015;
#Preço: R$ 83.000,00;
#Acessórios: Roda de liga leve;
INSERT INTO vehicles (model, year, price, accessories) 
VALUES ('CG 150 TITAN KS', 2007, 6700.00, 'N/A'),
       ('Corolla 1.8 GLI', 2017, 108900.00, 'Vidro, trava, direção elétrica'),
       ('Fit 1.5 Twist', 2015, 83000.00, 'Roda de liga leve');

#Exercício 3 - Crie uma query que atualize o carro de id igual a 3
#O carro foi alugado!! Utilize os valores abaixo para atualize os dados do veículo Honda Fit 1.5 Twist

#Nome: Kiélerson Robervaldo da Silva;
#Data de início do aluguel: 2023-09-09;
#Data de entrega do veículo: 2023-09-18;
UPDATE vehicles SET 
  rental_customer1 = 'Kiélerson Robervaldo da Silva',
  rental_start1 = '2023-09-09',
  rental_end1 = '2023-09-18'
WHERE id = 3
