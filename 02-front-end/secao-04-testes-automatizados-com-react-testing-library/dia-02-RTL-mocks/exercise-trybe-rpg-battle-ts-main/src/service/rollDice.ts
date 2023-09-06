/*
O arquivo service/rollDice.ts.
Ele implementa uma função rollDice, a qual faz uma simulação como se uma pessoa estivesse rolando um dado.
Ou seja, a função retorna um número aleatório entre 1 e o valor máximo do dado (definido por meio de um parâmetro chamado size).
*/
const defaultDiceSize = 20;

const rollDice = (size = defaultDiceSize) => {
  const maxNumber = Math.floor(size);
  return Math.floor(Math.random() * (maxNumber - 1) + 1);
};

export default rollDice;
