let a = "A"; //A tenha o valor de B
let b = "B"; //B tenha o valor de C
let c = "C"; //C tenha o valor de A

const tempA = a;
a = b;
b = c;
c = tempA;

console.log (a, b, c);

/* 
* Forma mais antiga de resolver isso
*/

[a, b, c] = [a, b, c];

/*
* Forma mais atualizada
*/