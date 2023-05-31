let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//4-Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: 
// - caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; 
// - caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.

let soma = 0;
let media;

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
    media = soma / numbers.length;
};

if (media > 20) {
    console.log('O valor da média aritmética é maior que 20');
} else {
    console.log('O valor da média aritmética é menor ou igual a 20');
};
