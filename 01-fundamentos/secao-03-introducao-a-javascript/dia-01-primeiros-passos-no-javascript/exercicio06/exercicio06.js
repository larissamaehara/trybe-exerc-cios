let num1 = 1;
let num2 = 7;
let num3 = 5;

let par = false;

//Retorna TRUE se pelo menos uma das trÊs variáveis for par

if ((num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0)) {
    par = true;
};

console.log(par);