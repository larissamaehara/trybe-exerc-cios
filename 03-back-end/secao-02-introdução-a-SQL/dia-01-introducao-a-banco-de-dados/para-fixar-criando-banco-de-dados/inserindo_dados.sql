#Exercício 1 - Faça uma query que insira um modelo na tabela models
#As características do modelo são:
#Nome: CG 150 TITAN KS;
#Marca: Honda;
INSERT INTO models (name, brand)
    VALUES ('CG 150 TITAN KS', 'Honda');

#Exercício 2 - Faça uma query que insira vários modelos na tabela models
#As características do modelo são:
#Nome: Corolla 2.0 XEI;
#Marca: Toyota;
#Nome: Uno 1.0 EVO VIVACE 8V;
#Marca: Fiat;
#Nome: Fit 1.5 Twist;
#Marca: Honda.
INSERT INTO models (name, brand)
    VALUES ('Corolla 2.0 XEI', 'Toyota'),
           ('Uno 1.0 EVO VIVACE 8V', 'Fiat'),
           ('Fit 1.5 TWIST', 'Honda');