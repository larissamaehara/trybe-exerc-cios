import { vi } from 'vitest';

import rollMultipleDice from '../service/rollMultipleDice';
import rollDice from '../service/rollDice';

/*
    Exercício 02
*/
// Criando o mock para a função `rollDice` através do vi.mock.
// Assim, podemos controlar os retornos do `rollDice` para que não sejam mais aleatórios
vi.mock('../service/rollDice');
// Para o primeiro dado, o resultado deverá ser 6.
// Para o segundo dado rolado, o resultado deverá ser 4.
// Não há mais aleatoriedade na função `rollMultipleDice`
it('testa a função `rollMultipleDice`', () => {
  (rollDice as any).mockReturnValueOnce(6)
    .mockReturnValueOnce(4);
  // Considerando um dado de tamanho 20 para este teste.
  // Verifica se o valor retornado pela função rollMultipleDice é a somatória de 6 + 4, ou seja, 10.
  // Verifique se a função rollDice foi chamada duas vezes.
  expect(rollMultipleDice(2, 20)).toBe(10);
  // Testando se ao chamar a função `rollMultipleDice` com
  // o primeiro argumento = 2 (dois dados), a função `rollDice` deverá
  // ser chamada 2 vezes.
  expect(rollDice).toHaveBeenCalledTimes(2);
});
