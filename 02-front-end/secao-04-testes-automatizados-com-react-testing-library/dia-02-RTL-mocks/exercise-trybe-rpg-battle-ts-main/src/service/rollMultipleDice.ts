/*
A função rollMultipleDice simula como se a pessoa estivesse rolado vários dados ao mesmo tempo.
Ela recebe como parâmetro quantos dados foram rolados e qual o tamanho dos dados.
Para gerar o valor de cada dado, a função rollMultipleDice usa internamente a função rollDice.
*/

import rollDice from './rollDice';

const defaultDiceSize = 20;

const rollMultipleDice = (quantity = 1, size = defaultDiceSize) => {
  let result = 0;
  for (let i = 0; i < quantity; i += 1) {
    result += rollDice(size);
  }

  return result;
};

export default rollMultipleDice;
