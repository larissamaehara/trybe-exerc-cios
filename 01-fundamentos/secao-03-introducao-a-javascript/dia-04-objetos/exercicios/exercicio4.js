const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];

  // Criação de um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor:
const countingFruit = {};

// Loop que irá contar quantas vezes cada fruta aparece no array basket
for (let index = 0; index < basket.length; index += 1) {
  let fruit = basket[index];
  // Condicional: SE a propriedade com o nome da fruta ainda não existir, então ela será criada com o valor 1. Caso ela já exista, vamos incrementar o valor.
  if (!countingFruit[fruit]) {
    countingFruit[fruit] = 1;
  } else {
    countingFruit[fruit] += 1;
  }
};

// Convertemos o objeto result em um array
const input = Object.entries(countingFruit);

// Criação de um novo array
let howManyFruits = [];

// Loop que irá verificar se o número de frutas é maior ou não do que 1. Caso seja maior, adicionamos a letra "s".
for (let index = 0; index < input.length; index += 1) {
  if (input[index][1] > 1) {
    howManyFruits.push(`${input[index][1]} ${input[index][0]}s`);
  } else {
    howManyFruits.push(`${input[index][1]} ${input[index][0]}`);
  }
};

// Exibimos a string juntando os valores do array "newArray" com uma vírgula e um espaço em branco.
console.log(`Sua cesta possui: ${howManyFruits.join(', ')}.`);