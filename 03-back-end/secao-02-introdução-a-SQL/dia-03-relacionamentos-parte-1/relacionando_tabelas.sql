#Exercício 1 -Faça uma query que busque todos carros e seus respectivos modelos
#Para esta query, traga apenas:

#brand: Aplique o alias “Marca”.
#name: Aplique o alias “Modelo”;
#model_id: Aplique o alias “Identificador do Modelo”;
#price: Aplique o alias “Valor”;
#year: Aplique o alias “Ano de Fabricação”.
SELECT 
    mods.brand AS 'Marca',
    mods.name AS 'Modelo',
    veh.model_id AS 'Identificador do Modelo',
    veh.price AS 'Valor',
    veh.year AS 'Ano de Fabricação'
FROM vehicles AS veh
    INNER JOIN models AS mods
        ON veh.model_id = mods.id;