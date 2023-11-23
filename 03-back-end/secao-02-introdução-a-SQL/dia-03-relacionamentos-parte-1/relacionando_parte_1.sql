#Exercício 1 - Altere a tabela vehicles para que ela receba o atributo model_id
#O atributo model_id deve ter as seguintes características:

#Deve ser um número inteiro;
#Não deve permitir nulo;
#Deve-se chamar model_id e estar na tabela vehicles;

ALTER TABLE vehicles 
    ADD COLUMN model_id INTEGER NOT NULL;

#Exercício 2 - Altere a tabela vehicles para que o atributo model_id receba os valores corretos
UPDATE vehicles SET model_id = 1 WHERE id = 1;
UPDATE vehicles SET model_id = 2 WHERE id = 2;
UPDATE vehicles SET model_id = 3 WHERE id = 3;