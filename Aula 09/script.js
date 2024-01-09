let num1 = prompt("Digite o número");
let num2 = prompt("Digite um número");

console.log(num1, num2);

// A função prompt sempre retorna uma string

num1 = Number(num1);
num2 = Number(num2);

let soma = num1 + num2;

alert(`O resultado é ${soma}`);