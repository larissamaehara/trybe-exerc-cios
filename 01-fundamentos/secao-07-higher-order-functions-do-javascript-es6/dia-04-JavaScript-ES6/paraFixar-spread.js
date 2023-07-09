// Faça uma lista com as suas frutas favoritas
const specialFruit = ['uva', 'maçã', 'morango']

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['creme de leite', 'granola', 'leite condensado']

const fruitSalad = (fruit, additional) => {
  const fruitSaladPlusAdditional = [...fruit, ...additional]
  return fruitSaladPlusAdditional
}

console.log(fruitSalad(specialFruit, additionalItens))
