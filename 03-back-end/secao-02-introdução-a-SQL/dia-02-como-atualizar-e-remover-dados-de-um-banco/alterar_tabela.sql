#Exercício 1 - Crie uma query que altere a tabela models, adicionando um novo atributo nela
#Adicione uma nova coluna na tabela models chamada discontinued do tipo BOOLEAN com o valor padrão FALSE.

ALTER TABLE models 
    ADD COLUMN discontinued BOOLEAN NOT NULL DEFAULT FALSE;