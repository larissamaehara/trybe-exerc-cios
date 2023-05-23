const multiplicador = [3, 7];
let resultado;

for (let index = 0; index < multiplicador.length; index = index + 1) {
  for(let index2 = 1; index2 <= 9; index2 = index2 + 1) {
    resultado = multiplicador[index] * index2;
    console.log(multiplicador[index] + ' x ' + index2 + ' = ' + resultado)
  }
}