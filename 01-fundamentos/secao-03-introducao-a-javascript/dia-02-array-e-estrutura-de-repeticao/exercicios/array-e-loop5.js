let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//5-Utilizando for, descubra o maior valor contido no array e imprima-o.

let comparar = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > comparar) {
        comparar = numbers[index];
    }
};

console.log(comparar);