const valorItens = [1, 32, 44, 2, 3]

valorItens.reduce((acc, curr) => {
  console.log('acc:', acc)
  console.log('curr:', curr)
  console.log('a soma atual é', acc + curr)

  return acc + curr
}, 0)

const numbers = [50, 85, -30, 3, 15]
const getBigger = (bigger, number) => ((bigger > number) ? bigger : number)
const bigger = numbers.reduce(getBigger)
console.log(bigger) // 85
