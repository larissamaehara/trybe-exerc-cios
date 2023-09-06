/*
A função attackEnemy simula um ataque a um inimigo.
Ainda, ela compara os resultados dos dados que você rolou (da função rollMultipleDice) com a defesa do inimigo.
*/
import { AttackResult } from '../types';
import rollMultipleDice from './rollMultipleDice';

const attackEnemy = (
  diceQuantity: number,
  diceSize: number,
  enemy: any,
): AttackResult => {
  const attackPoints = rollMultipleDice(diceQuantity, diceSize);
  const { defensePoints } = enemy;
  return {
    attackPoints,
    defensePoints,
    success: attackPoints > defensePoints,
  };
};

export default attackEnemy;
