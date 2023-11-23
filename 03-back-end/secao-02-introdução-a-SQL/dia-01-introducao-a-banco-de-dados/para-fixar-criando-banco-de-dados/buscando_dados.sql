#Exercício 1 - Faça uma query que busque todos os modelos:
SELECT * FROM models;

#Exercício 2 - Faça uma query que busque o modelo de id igual a 4:
#Para esta query, traga apenas:
#brand: Aplique o alias “Marca”.
#name: Aplique o alias “Modelo”;
SELECT 
    brand AS 'Marca',
    name AS 'Modelo' 
FROM models WHERE id = 4;