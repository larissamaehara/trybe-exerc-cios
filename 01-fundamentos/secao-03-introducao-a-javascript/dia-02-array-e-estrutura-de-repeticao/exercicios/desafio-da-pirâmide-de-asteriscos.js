//Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base

let base = 5;
let asterisco = '*';
let saida = '';

for (let linhaIndex = 0; linhaIndex <= base; linhaIndex += 1) {
    saida = saida + asterisco;
    console.log(saida);
};
