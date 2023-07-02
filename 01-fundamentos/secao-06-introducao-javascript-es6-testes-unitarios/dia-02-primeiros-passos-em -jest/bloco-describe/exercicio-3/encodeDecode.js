/* A função myFizzBuzz(num) recebe um número num como parâmetro. Assim:

Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz".
Caso num seja um número divisível apenas por 3, a função retorna "fizz".
Caso num seja um número divisível apenas por 5, a função retorna "buzz".
Caso num seja um número que não é divisível nem por 3 nem por 5, a função retorna o próprio número num.
Caso num não seja um número, a função retorna false.
 */

// encodeDecode.js

const mapString = (objectMap, string) => {
  const splitString = string.split('')
  const mappedArray = []

  for (let index = 0; index < splitString.length; index += 1) {
    const character = splitString[index]
    const mappedValue = objectMap[character]

    if (mappedValue) {
      mappedArray.push(mappedValue)
    } else {
      mappedArray.push(character)
    }
  }

  return mappedArray.join('')
}

const encode = (string) => {
  const map = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  }
  return mapString(map, string)
}

const decode = (string) => {
  const map = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u'
  }
  return mapString(map, string)
}

module.exports = { encode, decode }
