const nome = "Luiz Otávio";
const sobrenome = "Miranda";
const idade = 30; 
const peso = 84;
const altura = 1.80;

let imc = peso / (altura * altura);
let anoNascimento = 2024 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} e seu IMC é de ${imc}, ${nome} ${sobrenome} nasceu em  ${anoNascimento}`);