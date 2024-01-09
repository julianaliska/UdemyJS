let numero = prompt("Digite um número: ");
let numeroInteiro = Number.isInteger(numero);
let numeroNaN = Number.isNaN(numero);
let numeroBaio = Math.floor(numero);
let numeroCima = Math.ceil(numero);
let numero2 = Number(numero).toFixed(2);
let raizQuadrada = numero ** 0.5;

document.body.innerHTML += `<h1> Seu número é ${numero} </h1><br><br>`;
document.body.innerHTML += `Raiz Quadrada: ${raizQuadrada}<br><br>`;
document.body.innerHTML += `${numero} é inteiro : ${numeroInteiro}<br><br> `;
document.body.innerHTML += `É NaN: ${numeroNaN} <br><br>`;
document.body.innerHTML += `Arredondado para baixo: ${numeroBaio} <br><br>`;
document.body.innerHTML += `Arredondado para cima: ${numeroCima} <br><br>`;
document.body.innerHTML += `Com duas casas decimais: ${numero2}<br><br> `;