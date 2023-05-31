const balance = 100;

function sumBalance(balance, num1) {
    return balance + num1;
};

function subBalance(balance, num2) {
    return balance - num2;
};

function multBalance(balance, tax) {
    return balance * tax;
};

function divBalance(balance, num3) {
    return balance / num3
};

console.log(sumBalance(balance, 10));
console.log(subBalance(balance, 60));
console.log(multBalance(balance, 0.5));
console.log(divBalance(balance, 10));