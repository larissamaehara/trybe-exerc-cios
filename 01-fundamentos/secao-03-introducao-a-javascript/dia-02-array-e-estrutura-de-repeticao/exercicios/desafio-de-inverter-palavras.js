//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de 
//inverter uma palavra, como a palavra “banana” para “ananab”. 
//Utilize a string abaixo como exemplo. 
//Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.

// De olho na dica 👀: Pesquise sobre os seguintes métodos: split(), reverse() e join();
let word = 'amora';
let drow = '';

//drow = word.split('').reverse().join('');

//console.log(drow);

for (let index = word.length - 1; index >= 0; index -= 1) {
    drow += word[index];
};

console.log(drow);