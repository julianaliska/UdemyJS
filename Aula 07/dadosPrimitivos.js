const nome = 'Luiz'; //String
const nome1 = "Luiz"; //String
const nome2 = `Luiz`; //String
const num1 = 10; //Number
const num2 = 10.52; //Number
let nomeAluno; //undefined
let sobrenomeAluno = null; //Nulo -> Não aponta para local nenhum da memória
//O null informa explicitamente que o valor dela é nulo, o undefined é o próprio JS que faz. 
const aprovado = false; // boolean = false/true

console.log(typeof nome); //O typeof retorna o tipo da váriavel

let a = 2;
const b = a;
console.log(a, b);

a = 3;

console.log(a, b);