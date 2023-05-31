//Escreva um algoritmo que, dado um valor n, sendo n > 1, 
//imprima na tela um quadrado feito de asteriscos de tamanho n.

let n = 5;
let asterisco = '*';
let saida = '';

for (let linhaIndex = 0; linhaIndex < n; linhaIndex += 1) {
    saida = saida + asterisco;
};

for (let linhaIndex = 0; linhaIndex < n; linhaIndex += 1) {
    console.log(saida);
};
