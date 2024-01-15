/* 
Escreva uma função que recebe um número e retorne o seguinte:
Número é divisível por 3 = Fizz
Número é divisível por 5 = Buzz
Numero é divisível por 3 e 5 = FizzBuzz
Número não é divisível por 3 e 5 = Retorna o próprio número 
Checar se o número é realmente um número = Retorna a própria váriavel se não for
Use a função com números de 0 a 100 
*/


function fizzBuzz(numero) {
    if (numero % 5 === 0 && numero % 3 === 0) {
        console.log(numero, 'FizzBuzz');
    }
    else if (numero % 3 === 0) {
        console.log(numero, 'Fizz');
    } else if (numero % 5 === 0) {
        console.log(numero, 'Buzz');
    } else if (numero % 3 !== 0 && numero % 5 !== 0) {
        console.log(numero);
    } else if (Number.isNaN(numero)) {
        console.log(numero);
    }
}

for (let i = 0; i <= 100; i++) {
    fizzBuzz(i);
}