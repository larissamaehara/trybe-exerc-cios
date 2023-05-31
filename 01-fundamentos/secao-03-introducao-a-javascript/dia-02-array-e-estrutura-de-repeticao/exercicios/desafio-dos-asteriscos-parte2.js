let base = 5;
let asterisco = '*';
let saida = '';
let posicao = base - 1;

for (let linhaIndex = 0; linhaIndex < base; linhaIndex += 1) {
  for (let colunaIndex = 0; colunaIndex < base; colunaIndex += 1) {
    if (colunaIndex < posicao) {
        saida = saida + ' ';
    } else {
        saida = saida + asterisco;
    }
  }
  console.log(saida);
  saida = '';
  posicao -= 1;
};