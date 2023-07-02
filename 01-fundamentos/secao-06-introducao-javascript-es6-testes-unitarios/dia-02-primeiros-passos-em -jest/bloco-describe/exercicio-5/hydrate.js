// A função hydrate recebe uma string no formato “número bebida” e retorna a sugestão de quantos copos de água você deve beber para se hidratar.
// Para cada bebida, deve-se tomar um copo de água, a fim de evitar ressaca.

const hydrate = (stringAmountDrink) => {
  const splitString = stringAmountDrink.split('')
  let glassesOfWater = 0
  for (let index = 0; index < splitString.length; index += 1) {
    const parsedCharacter = parseInt(splitString[index])

    if (parsedCharacter) {
      glassesOfWater += parsedCharacter
    }
  }

  let glass = 'copo'

  if (glassesOfWater > 1) {
    glass = 'copos'
  }

  return `${glassesOfWater} ${glass} de água`
}

module.exports = hydrate
