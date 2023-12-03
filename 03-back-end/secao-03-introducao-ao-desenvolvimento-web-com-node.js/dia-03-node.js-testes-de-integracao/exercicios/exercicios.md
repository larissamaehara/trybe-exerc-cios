# Exercícios

## Exercício 1

Crie os testes de integração para o endpoint GET /chocolates/total

Crie um caso para o código retornado
Crie outro caso para o retorno esperado
Atenção: Observe que os testes devem falhar por enquanto, como estamos desenvolvendo usando o conceito de TDD, mas não se preocupe que na sequência vamos fazer a implementação e os testes deverão passar. 👍

## Exercício 2

Implemente o endpoint GET /chocolates/total na aplicação

Crie um novo endpoint retornando o total de chocolates na base de dados
Depois de implementar, verifique se os testes passam com sucesso

## Exercicios Bonus

### Exercício 3

Crie os testes de integração para o endpoint GET /chocolates/search

Crie um caso verificando o código e o retorno esperado para quando existirem chocolates com o nome informado;
Crie um caso para quando não existirem chocolates com o nome informado;
Verifique se os testes falham com sucesso.

### Exercício 4

Implemente o endpoint GET /chocolates/search na aplicação

Crie um novo endpoint retornando os chocolates que tem a string name na base de dados;
Depois de implementar, verifique se os testes passam com sucesso.
PUT /chocolates/:id : Atualiza um chocolate

Esse endpoint deve atualizar um chocolate que existe na base de dados, usando o seguinte contrato:
👉 PUT /chocolates/1

Objetivo: Atualizar um chocolate que existe na base de dados.

### Exercício 5

Crie os testes de integração para o endpoint PUT /chocolates/:id

Crie um caso verificando o código e o retorno esperado para quando o chocolate é atualizado;
Crie um caso para quando não existe chocolate com o id informado;
Verifique se os testes falham com sucesso.

### Exercício 6

Implemente o endpoint PUT /chocolates/:id na aplicação

Crie um novo endpoint que atualiza um chocolate na base de dados;
Depois de implementar, verifique se os testes passam com sucesso.