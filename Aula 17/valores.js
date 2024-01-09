/*
*
* Primitivos - (Imutáveis) String, number, boolean, undefined, null, bigint, symbol 
*
* Referência (Mutável) - Array, object, function
*/

let nome = 'Luiz';
nome = 'Otávio';
console.log(nome);

// Apontam para o mesmo lugar na memória
let a = [1,2,3];
let b = a;
console.log(a,b);

a.push(4); //Altera no a e no b também pois apontam para o mesmo valor na memória
console.log(a, b);

b.pop();
console.log(b, a);

// Para simplesmente copiar o valor de uma váriavel para outra, sem apontar para o mesmo lugar e tornando elas dependentes, é da forma abaixo:

let x = ['a','b','c'];
let y = [...x]; //Dessa forma o conteúdo da váriavel x foi copiado para dentro da váriavel y

y.push('d');

console.log(x,y);

//Também funciona para objetos

const w = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

const z = {...w};

z.nome = "João";

console.log(z);
console.log(w);