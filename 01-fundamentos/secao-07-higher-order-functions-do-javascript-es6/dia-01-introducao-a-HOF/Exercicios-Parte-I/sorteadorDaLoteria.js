const numberChecker = (myNumber, number) => myNumber === number

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1)

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!'
}

console.log(lotteryResult(2, numberChecker))

/* operador ternário” e é uma alternativa para se realizar uma validação if, else
onde ? é equivalente ao if e : ao else.
Dessa forma, o que está acontecendo é: O retorno da função numberChecker é verdadeiro ?.
Se sim, retorne 'Lucky day, you won!', se não :, retorne 'Try Again!'. */
