let anguloA = 90;
let anguloB = 45;
let anguloC = 45;

let somaDosAngulos = anguloA + anguloB + anguloC;

let todosOsAngulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (todosOsAngulosPositivos) {
    if (somaDosAngulos === 180) {
        console.log(true);
    } else {
        console.log(false);
    };
} else {
    console.log('Erro: ângulo negativo!');
}