let a = 'A';
let b = 'B';
let c = 'C';

let numeros = [1,2,3];
[a, b, c] = numeros;

console.log(a);

numeros = [b, c, a];
console.log(numeros);

//             0  1  2  3  4  5  6  7  8
const teste = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, segundoNumero, ...resto] = teste;
//Essa váriavel resto vai pegar o resto do Array que sobrou

console.log(primeiroNumero, segundoNumero);
console.log(resto);

const numeros2 = [
    [1, 2, 3], //Índice 0
    [4, 5, 6], //Índice 1
    [6, 7, 8]  //Índice 2
];

const [,[,,seis]] = numeros2; //Mais complexo
console.log(seis);

//Por exemplo para acessar o 6:
console.log(numeros2[1][2]);

const [lista1, lista2, lista3] = numeros2;
console.log(lista1[2]);