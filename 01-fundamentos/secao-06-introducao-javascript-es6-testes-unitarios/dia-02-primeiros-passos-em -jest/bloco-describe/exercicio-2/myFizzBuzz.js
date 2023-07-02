/* A função myFizzBuzz(num) recebe um número num como parâmetro. Assim:

Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz".
Caso num seja um número divisível apenas por 3, a função retorna "fizz".
Caso num seja um número divisível apenas por 5, a função retorna "buzz".
Caso num seja um número que não é divisível nem por 3 nem por 5, a função retorna o próprio número num.
Caso num não seja um número, a função retorna false. */

const myFizzBuzz = (num) => {
  if (typeof num !== 'number') return false
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz'
  if (num % 3 === 0) return 'fizz'
  if (num % 5 === 0) return 'buzz'
  return num
}

module.exports = myFizzBuzz
