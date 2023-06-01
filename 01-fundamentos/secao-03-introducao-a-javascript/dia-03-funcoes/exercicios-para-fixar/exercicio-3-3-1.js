const balance = 100;

function sumBalance(value) {
  return value + balance;
};

function subBalance(value) {
  return balance - value;
};

function multBalance(value) {
  return value * balance;
};

function divBalance(value) {
  return balance / value;
};

// Chamadas das funções passando o valor do parâmetro
console.log(sumBalance(300)); // 400
console.log(subBalance(50)); // 50
console.log(multBalance(2)); // 200
console.log(divBalance(5)); // 20