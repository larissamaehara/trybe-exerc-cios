let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//6-Descubra quantos valores ímpares existem no array e imprima o resultado. 
//Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
let quantoImpares = 0;

for (let index = 0; index < numbers.length; index +=1) {
    if (numbers[index] % 2 !== 0) {
        quantoImpares += 1;
    }
};

if(quantoImpares===0){
    console.log("Nenhum valor ímpar encontrado");
} else {
    console.log(quantoImpares);
};