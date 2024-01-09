let num1 = 1;
let num2 = 2.56532653;

console.log(num1.toString() + num2); // O toString converte o número para String
console.log(typeof num1); // O número continua sendo um number, apenas foi convertido para String naquele console

console.log(num1.toFixed(2)); //Ele arredonda o número para a quantidade de casas decimais indicada entre parênteses

console.log(Number.isInteger(num1)); //Verifica se o número é um inteiro

console.log(Number.isNaN(num1)); //Retorna se o número não é um número

let x = 0.7;
let y = 0.9;

x += y;
x = Number(x.toFixed(2));

console.log(x);