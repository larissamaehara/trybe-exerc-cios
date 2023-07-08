const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined
}

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined
}

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined
}

const battleMembers = { mage, warrior, dragon }

// Crie uma função que retorne o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const dragonAttack = (dragon) => {
  const minDamage = 15
  const maxDamage = Math.floor(Math.random() * dragon.strength)
  const dragonDamage = maxDamage > minDamage ? maxDamage : minDamage
  return dragonDamage
}

// Crie uma função que retorne o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const warriorAttack = (warrior) => {
  const minDamage = warrior.strength
  const maxDamage = Math.floor(Math.random() * (minDamage * warrior.weaponDmg))
  const warriorDmg = maxDamage > minDamage ? maxDamage : minDamage
  return warriorDmg
}

// Crie uma função que retorne um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disso, a função deve ter uma condicional: caso o mago tenha menos de 15 de mana, o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”), e a mana gasta é 0.
const mageAttack = (mage) => {
  const mageMana = mage.mana
  const minDamage = mage.intelligence
  const maxDamage = minDamage * 2
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...'
  }

  if (mageMana > 15) {
    const mageDamage = minDamage < maxDamage ? maxDamage : minDamage
    turnStats.manaSpent = 15
    turnStats.damageDealt = mageDamage
    return turnStats
  }
  return turnStats
}

// PARTE II
const gameActions = {
  // Turno do personagem Warrior
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack(warrior)
    dragon.healthPoints -= warriorDamage
    warrior.damage = warriorDamage
  },
  // Turno do personagem Mage
  mageTurn: (mageAttack) => {
    const mageTurnStats = mageAttack(mage)
    const mageDamage = mageTurnStats.damageDealt
    mage.mana -= mageTurnStats.manaSpent
    dragon.healthPoints -= mageDamage
    mage.damage = mageDamage
  },
  // Turno do Dragão
  dragonTurn: (dragonAttack) => {
    const dragonDamage = dragonAttack(dragon)
    mage.healthPoints -= dragonDamage
    warrior.healthPoints -= dragonDamage
    dragon.damage = dragonDamage
  },
  turnResults: () => battleMembers
}

gameActions.warriorTurn(warriorAttack)
gameActions.mageTurn(mageAttack)
gameActions.dragonTurn(dragonAttack)
