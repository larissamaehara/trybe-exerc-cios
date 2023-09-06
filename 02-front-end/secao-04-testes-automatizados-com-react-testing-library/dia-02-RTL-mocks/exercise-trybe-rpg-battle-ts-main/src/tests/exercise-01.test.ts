import { vi } from 'vitest';
import rollDice from '../service/rollDice';

it('Testa a função `rollDice`', () => {
  /*
    Exercício 01
  */
  // Criando o mock para a função 'Math.random' através do vi.spyOn.
  // Assim, a 'Math.random' sempre irá retornar um número fixo, no nosso caso, '0.8'
  vi.spyOn(global.Math, 'random').mockReturnValue(0.8);
  // De acordo com os cálculos da função `rollDice`, quando o parâmetro passado é 20 e 'Math.random' retorna '0.8'
  // o valor retornado por ela deve ser 16
  expect(rollDice(20)).toBe(16);
  // Nessa última etapa verifica se a função 'Math.random' foi chamada apenas 1 vez
  expect(global.Math.random).toHaveBeenCalledTimes(1);
});
